#!/usr/bin/env node
// OpenMat content builder.
// Scans content/questions and content/lessons, parses the YAML front-matter and
// Markdown body of each file, and writes a single docs/data/content.json that the
// static study site (docs/) consumes. No external dependencies.
//
// Usage: node scripts/build.mjs

import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const QUESTIONS_DIR = join(ROOT, 'content', 'questions');
const LESSONS_DIR = join(ROOT, 'content', 'lessons');
const OUT_FILE = join(ROOT, 'docs', 'data', 'content.json');

const warnings = [];

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

// --- Minimal front-matter parser for OpenMat's documented format ---------------

function stripScalar(v) {
  v = v.trim();
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    return v.slice(1, -1);
  }
  if (v === 'true') return true;
  if (v === 'false') return false;
  return v;
}

function parseScalarOrArray(v) {
  v = v.trim();
  if (v.startsWith('[') && v.endsWith(']')) {
    const inner = v.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(',').map((s) => stripScalar(s));
  }
  return stripScalar(v);
}

function parseFrontMatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const [, fm, body] = m;
  const data = {};
  const lines = fm.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    const top = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!top) continue;
    const key = top[1];
    const rest = top[2];
    if (rest === '') {
      // Possibly a nested one-level map (e.g. choices) via indented lines.
      const nested = {};
      let nestedFound = false;
      while (i + 1 < lines.length && /^\s+\S/.test(lines[i + 1])) {
        const sub = lines[i + 1].match(/^\s+([A-Za-z0-9_-]+):\s*(.*)$/);
        if (!sub) break;
        nested[sub[1]] = stripScalar(sub[2]);
        nestedFound = true;
        i++;
      }
      data[key] = nestedFound ? nested : '';
    } else {
      data[key] = parseScalarOrArray(rest);
    }
  }
  return { data, body };
}

// Split a body into sections keyed by their `## Heading` (lowercased).
function splitSections(body) {
  const sections = {};
  const parts = body.split(/^##\s+/m);
  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const nl = trimmed.indexOf('\n');
    const heading = (nl === -1 ? trimmed : trimmed.slice(0, nl)).trim().toLowerCase();
    const content = nl === -1 ? '' : trimmed.slice(nl + 1).trim();
    sections[heading] = content;
  }
  return sections;
}

function parseHints(text) {
  if (!text) return [];
  return text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.startsWith('- '))
    .map((l) => l.slice(2).trim());
}

const REQUIRED_QUESTION = ['id', 'section', 'topic', 'subtopic', 'type', 'difficulty', 'answer', 'status'];
const REQUIRED_LESSON = ['id', 'section', 'topic', 'subtopic', 'title', 'status'];

function checkRequired(data, required, rel) {
  for (const f of required) {
    if (data[f] === undefined || data[f] === '') warnings.push(`${rel}: missing required field "${f}"`);
  }
}

async function buildQuestions() {
  const files = await walk(QUESTIONS_DIR);
  const questions = [];
  for (const file of files) {
    const rel = relative(ROOT, file).replace(/\\/g, '/');
    const raw = await readFile(file, 'utf8');
    const { data, body } = parseFrontMatter(raw);
    checkRequired(data, REQUIRED_QUESTION, rel);
    const sections = splitSections(body);
    const expectedId = file.replace(/\\/g, '/').split('/').pop().replace(/\.md$/, '');
    if (data.id && data.id !== expectedId) warnings.push(`${rel}: id "${data.id}" does not match filename "${expectedId}"`);
    questions.push({
      id: data.id,
      section: data.section,
      topic: data.topic,
      subtopic: data.subtopic,
      type: data.type,
      difficulty: data.difficulty,
      tags: Array.isArray(data.tags) ? data.tags : [],
      choices: data.choices && typeof data.choices === 'object' ? data.choices : null,
      answer: String(data.answer ?? ''),
      author: data.author || '',
      reviewers: Array.isArray(data.reviewers) ? data.reviewers : [],
      status: data.status,
      prompt: sections['question'] || '',
      explanation: sections['explanation'] || '',
      hints: parseHints(sections['hints']),
    });
  }
  questions.sort((a, b) => String(a.id).localeCompare(String(b.id)));
  return questions;
}

async function buildLessons() {
  const files = await walk(LESSONS_DIR);
  const lessons = [];
  for (const file of files) {
    const rel = relative(ROOT, file).replace(/\\/g, '/');
    const raw = await readFile(file, 'utf8');
    const { data, body } = parseFrontMatter(raw);
    checkRequired(data, REQUIRED_LESSON, rel);
    lessons.push({
      id: data.id,
      section: data.section,
      topic: data.topic,
      subtopic: data.subtopic,
      title: data.title || data.id,
      tags: Array.isArray(data.tags) ? data.tags : [],
      author: data.author || '',
      reviewers: Array.isArray(data.reviewers) ? data.reviewers : [],
      status: data.status,
      body: body.trim(),
    });
  }
  lessons.sort((a, b) => String(a.id).localeCompare(String(b.id)));
  return lessons;
}

async function main() {
  const [questions, lessons] = await Promise.all([buildQuestions(), buildLessons()]);

  const sections = { quant: 'Quantitative', verbal: 'Verbal', 'data-insights': 'Data Insights' };
  const stats = {};
  for (const key of Object.keys(sections)) {
    stats[key] = {
      label: sections[key],
      questions: questions.filter((q) => q.section === key).length,
      lessons: lessons.filter((l) => l.section === key).length,
    };
  }

  const out = {
    sections,
    stats,
    counts: { questions: questions.length, lessons: lessons.length },
    questions,
    lessons,
  };

  await mkdir(dirname(OUT_FILE), { recursive: true });
  await writeFile(OUT_FILE, JSON.stringify(out, null, 2) + '\n', 'utf8');

  console.log(`Built ${questions.length} questions and ${lessons.length} lessons -> ${relative(ROOT, OUT_FILE)}`);
  if (warnings.length) {
    console.log(`\n${warnings.length} warning(s):`);
    for (const w of warnings) console.log(`  - ${w}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
