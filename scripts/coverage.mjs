#!/usr/bin/env node
// OpenMat coverage report.
// Cross-references the taxonomy in curriculum.md against the content actually
// present in content/questions and content/lessons, and prints per-subtopic
// counts plus a list of gaps (subtopics with no questions).
//
// IMPORTANT: this only sees the CURRENT checkout. Content that lives in
// unmerged pull-request branches is invisible here — before claiming a
// subtopic, also check the repository's OPEN pull requests (see the
// "Automated & daily-run contributions" section of CONTRIBUTING.md).
//
// Usage: node scripts/coverage.mjs

import { readdir, readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const QUESTIONS_DIR = join(ROOT, 'content', 'questions');
const LESSONS_DIR = join(ROOT, 'content', 'lessons');
const CURRICULUM = join(ROOT, 'curriculum.md');

const SECTIONS = new Set(['quant', 'verbal', 'data-insights']);

async function walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  const files = [];
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(p)));
    else if (e.isFile() && e.name.endsWith('.md')) files.push(p);
  }
  return files;
}

// Pull the front-matter scalar fields we care about (no YAML dep needed).
function frontMatter(raw) {
  const text = raw.replace(/\r\n?/g, '\n');
  if (!text.startsWith('---')) return {};
  const end = text.indexOf('\n---', 3);
  if (end === -1) return {};
  const block = text.slice(3, end);
  const out = {};
  for (const line of block.split('\n')) {
    const m = /^([a-zA-Z_]+):\s*(.*)$/.exec(line);
    if (!m) continue;
    let v = m[2].trim().replace(/^["']|["']$/g, '');
    out[m[1]] = v;
  }
  return out;
}

const backticks = (s) => Array.from(s.matchAll(/`([^`]+)`/g), (m) => m[1]);

// Parse curriculum.md tables into taxonomy[section][topic] = Set(subtopics).
async function parseTaxonomy() {
  const raw = (await readFile(CURRICULUM, 'utf8')).replace(/\r\n?/g, '\n');
  const taxonomy = {};
  let section = null;
  for (const line of raw.split('\n')) {
    const h = /^##\s+.*\(`([a-z0-9-]+)`\)/.exec(line);
    if (h) {
      section = SECTIONS.has(h[1]) ? h[1] : null;
      continue;
    }
    if (!section || !line.trimStart().startsWith('|')) continue;
    const cells = line.split('|').map((c) => c.trim()).filter(Boolean);
    if (cells.length < 2) continue;
    const topicTok = backticks(cells[0])[0];
    if (!topicTok || topicTok === 'topic' || topicTok === 'section') continue; // header rows
    const subs = backticks(cells[cells.length - 1]).filter((s) => s !== 'subtopic');
    if (!subs.length) continue;
    (taxonomy[section] ??= {});
    (taxonomy[section][topicTok] ??= new Set());
    for (const s of subs) taxonomy[section][topicTok].add(s);
  }
  return taxonomy;
}

async function main() {
  const taxonomy = await parseTaxonomy();

  // Tally content by "section/topic/subtopic".
  const qCount = {}; // key -> {easy,medium,hard,total}
  const hasLesson = new Set();
  const unknown = []; // content tagged with a subtopic not in the taxonomy

  const inTaxonomy = (s, t, st) => taxonomy[s]?.[t]?.has(st);
  const key = (s, t, st) => `${s}/${t}/${st}`;

  for (const file of await walk(QUESTIONS_DIR)) {
    const fm = frontMatter(await readFile(file, 'utf8'));
    if (!fm.section) continue;
    const k = key(fm.section, fm.topic, fm.subtopic);
    const c = (qCount[k] ??= { easy: 0, medium: 0, hard: 0, total: 0 });
    if (c[fm.difficulty] !== undefined) c[fm.difficulty]++;
    c.total++;
    if (!inTaxonomy(fm.section, fm.topic, fm.subtopic)) unknown.push(`Q ${k}`);
  }
  for (const file of await walk(LESSONS_DIR)) {
    const fm = frontMatter(await readFile(file, 'utf8'));
    if (!fm.section) continue;
    const k = key(fm.section, fm.topic, fm.subtopic);
    hasLesson.add(k);
    if (!inTaxonomy(fm.section, fm.topic, fm.subtopic)) unknown.push(`L ${k}`);
  }

  // Report.
  let subtotal = 0;
  let covered = 0;
  const gaps = [];
  console.log('OpenMat coverage — current checkout only (not other branches)\n');
  for (const section of Object.keys(taxonomy)) {
    console.log(section.toUpperCase());
    for (const topic of Object.keys(taxonomy[section])) {
      console.log(`  ${topic}`);
      for (const st of taxonomy[section][topic]) {
        subtotal++;
        const k = key(section, topic, st);
        const c = qCount[k];
        const n = c ? c.total : 0;
        if (n > 0) covered++;
        else gaps.push(k);
        const bd = c ? `(e${c.easy} m${c.medium} h${c.hard})` : '';
        const lesson = hasLesson.has(k) ? 'lesson' : '      ';
        const flag = n === 0 ? '  << GAP (no questions)' : '';
        console.log(`    ${st.padEnd(26)} Q:${String(n).padStart(2)} ${bd.padEnd(12)} ${lesson}${flag}`);
      }
    }
    console.log('');
  }

  console.log(`Subtopics with ≥1 question: ${covered}/${subtotal}`);
  console.log(`Gaps (no questions): ${gaps.length ? gaps.join(', ') : 'none'}`);
  if (unknown.length) {
    console.log(`\n⚠ Content tagged outside the taxonomy (check curriculum.md slugs):`);
    for (const u of unknown) console.log(`  - ${u}`);
  }
  console.log('\nReminder: also check OPEN pull requests before claiming a subtopic — see CONTRIBUTING.md.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
