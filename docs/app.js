/* OpenMat study site — no framework, loads docs/data/content.json */
(function () {
  "use strict";

  const app = document.getElementById("app");
  let DATA = null;

  // ---- Markdown + math rendering ------------------------------------------
  const hasMd = typeof window.markdownit === "function";
  const hasKatex = typeof window.katex === "object" && window.katex;
  const md = hasMd
    ? window.markdownit({ html: false, linkify: false, typographer: true })
    : null;

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }

  function protectMath(src) {
    const math = [];
    let s = src.replace(/\\\[([\s\S]+?)\\\]/g, (_, tex) => {
      math.push([tex, true]);
      return "@@OMMATH" + (math.length - 1) + "@@";
    });
    s = s.replace(/\\\(([\s\S]+?)\\\)/g, (_, tex) => {
      math.push([tex, false]);
      return "@@OMMATH" + (math.length - 1) + "@@";
    });
    return { s, math };
  }

  function restoreMath(html, math) {
    return html.replace(/@@OMMATH(\d+)@@/g, (_, i) => {
      const [tex, display] = math[+i];
      if (!hasKatex) return escapeHtml(tex);
      try {
        return window.katex.renderToString(tex, { displayMode: display, throwOnError: false });
      } catch (e) {
        return escapeHtml(tex);
      }
    });
  }

  function renderMarkdown(src) {
    if (!src) return "";
    if (!md) return "<p>" + escapeHtml(src).replace(/\n\n/g, "</p><p>") + "</p>";
    const { s, math } = protectMath(src);
    return restoreMath(md.render(s), math);
  }

  function renderInline(src) {
    if (!src) return "";
    if (!md) return escapeHtml(src);
    const { s, math } = protectMath(src);
    return restoreMath(md.renderInline(s), math);
  }

  // ---- Progress (localStorage) --------------------------------------------
  // v2 shape: { version:2, handle:"", answered: { [id]: {result, timeSec, attempts, lastTs} } }
  const STORE_KEY = "openmat.progress.v2";
  const OLD_KEY = "openmat.progress.v1";

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const p = JSON.parse(raw);
        if (!p.answered) p.answered = {};
        return p;
      }
      // Migrate v1 ({ answered: { id: 'correct'|'wrong' } }) if present.
      const old = localStorage.getItem(OLD_KEY);
      if (old) {
        const o = JSON.parse(old) || {};
        const migrated = { version: 2, handle: "", answered: {} };
        Object.keys(o.answered || {}).forEach((id) => {
          migrated.answered[id] = { result: o.answered[id], timeSec: null, attempts: 1, lastTs: null };
        });
        saveProgress(migrated);
        return migrated;
      }
    } catch (e) {}
    return { version: 2, handle: "", answered: {} };
  }
  function saveProgress(p) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(p));
    } catch (e) {}
  }
  function recordAnswer(id, correct, timeSec) {
    const p = loadProgress();
    const prev = p.answered[id] || { attempts: 0 };
    p.answered[id] = {
      result: correct ? "correct" : "wrong",
      timeSec: typeof timeSec === "number" ? Math.round(timeSec) : prev.timeSec ?? null,
      attempts: (prev.attempts || 0) + 1,
      lastTs: Date.now(),
    };
    saveProgress(p);
  }

  // ---- Timing / pacing -----------------------------------------------------
  // Per-question target pace on the GMAT Focus Edition (section minutes / questions).
  const TARGET_SEC = { quant: 128, verbal: 117, "data-insights": 135 };
  function targetFor(section) {
    return TARGET_SEC[section] || 120;
  }
  function formatTime(sec) {
    sec = Math.max(0, Math.round(sec));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m + ":" + String(s).padStart(2, "0");
  }

  // ---- Helpers ------------------------------------------------------------
  const DS_CHOICES = {
    A: "Statement (1) ALONE is sufficient, but statement (2) alone is not.",
    B: "Statement (2) ALONE is sufficient, but statement (1) alone is not.",
    C: "BOTH statements TOGETHER are sufficient, but NEITHER alone is sufficient.",
    D: "EACH statement ALONE is sufficient.",
    E: "Statements (1) and (2) TOGETHER are NOT sufficient.",
  };

  function titleCase(slug) {
    return String(slug || "")
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }
  function sectionLabel(s) {
    return (DATA && DATA.sections && DATA.sections[s]) || titleCase(s);
  }
  function choicesFor(q) {
    if (q.choices && Object.keys(q.choices).length) return q.choices;
    if (q.type === "data-sufficiency") return DS_CHOICES;
    return {};
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function badge(cls, text) {
    return '<span class="badge ' + cls + '">' + escapeHtml(text) + "</span>";
  }
  function questionBadges(q) {
    return (
      '<span class="badges section-' + q.section + '">' +
      badge("sec", sectionLabel(q.section)) +
      badge(q.difficulty, q.difficulty) +
      badge("plain", titleCase(q.type)) +
      (q.status ? badge(q.status, q.status) : "") +
      "</span>"
    );
  }
  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  // ---- Navigation ---------------------------------------------------------
  function setActiveNav(name) {
    document.querySelectorAll(".site-nav [data-nav]").forEach((a) => {
      a.classList.toggle("active", a.getAttribute("data-nav") === (name || ""));
    });
  }

  // ---- Views --------------------------------------------------------------
  function viewHome() {
    const s = DATA.stats;
    const cards = Object.keys(s)
      .map(
        (k) =>
          '<div class="stat-card section-' + k + '">' +
          "<h3>" + escapeHtml(s[k].label) + "</h3>" +
          '<div class="big">' + s[k].questions + "</div>" +
          '<div class="sub">questions · ' + s[k].lessons + " lesson" + (s[k].lessons === 1 ? "" : "s") + "</div>" +
          "</div>"
      )
      .join("");

    app.innerHTML =
      '<section class="hero">' +
      "<h1>Free, open GMAT&nbsp;Focus prep</h1>" +
      '<p class="lede">Why pay hundreds for GMAT prep? OpenMat is a community-built, openly-licensed ' +
      "curriculum and question bank — free to study, fork, and improve.</p>" +
      '<div class="hero-actions">' +
      '<a class="btn primary" href="#/practice">Start practicing →</a>' +
      '<a class="btn ghost" href="#/browse">Browse questions</a>' +
      "</div></section>" +
      '<div class="stat-grid">' + cards + "</div>" +
      '<div class="prose-page">' +
      "<h2>How it works</h2>" +
      "<p>Every question and lesson is structured, tagged content reviewed by the community. " +
      "Nothing is behind a paywall, and all content is original — no copyrighted exam questions.</p>" +
      "<ul>" +
      "<li><strong>Practice</strong> filtered sets with instant feedback, worked explanations, and hints.</li>" +
      "<li><strong>Browse</strong> the whole bank, or read <strong>lessons</strong> by topic.</li>" +
      '<li><strong>Contribute</strong> your own questions on <a href="https://github.com/DMDaudio/OpenMat" target="_blank" rel="noopener">GitHub</a> — the bank grows with the community.</li>' +
      "</ul>" +
      '<p style="color:var(--muted);font-size:0.9rem;margin-bottom:0">' +
      DATA.counts.questions + " questions · " + DATA.counts.lessons + " lessons so far. This is the ground floor — " +
      '<a href="https://github.com/DMDaudio/OpenMat/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">help build it</a>.</p>' +
      "</div>";
  }

  // Practice state persists across re-renders within a session.
  const practice = { queue: [], index: 0, section: "all", difficulty: "all", answered: false, correctCount: 0, doneCount: 0, timerId: null, startTs: 0, sessionSec: 0 };

  function stopTimer() {
    if (practice.timerId) {
      clearInterval(practice.timerId);
      practice.timerId = null;
    }
  }

  function buildPracticeQueue() {
    let pool = DATA.questions.slice();
    if (practice.section !== "all") pool = pool.filter((q) => q.section === practice.section);
    if (practice.difficulty !== "all") pool = pool.filter((q) => q.difficulty === practice.difficulty);
    practice.queue = shuffle(pool.map((q) => q.id));
    practice.index = 0;
    practice.answered = false;
    practice.correctCount = 0;
    practice.doneCount = 0;
    practice.sessionSec = 0;
  }

  function filterBar(onChange) {
    const bar = el(
      '<div class="filters">' +
      '<select data-f="section">' +
      '<option value="all">All sections</option>' +
      '<option value="quant">Quantitative</option>' +
      '<option value="verbal">Verbal</option>' +
      '<option value="data-insights">Data Insights</option>' +
      "</select>" +
      '<select data-f="difficulty">' +
      '<option value="all">All difficulties</option>' +
      '<option value="easy">Easy</option>' +
      '<option value="medium">Medium</option>' +
      '<option value="hard">Hard</option>' +
      "</select>" +
      "</div>"
    );
    bar.querySelector('[data-f="section"]').value = practice.section;
    bar.querySelector('[data-f="difficulty"]').value = practice.difficulty;
    bar.querySelectorAll("select").forEach((sel) =>
      sel.addEventListener("change", () => {
        practice.section = bar.querySelector('[data-f="section"]').value;
        practice.difficulty = bar.querySelector('[data-f="difficulty"]').value;
        onChange();
      })
    );
    return bar;
  }

  function viewPractice() {
    app.innerHTML = "";
    app.appendChild(el('<h2 class="view-title">Practice</h2>'));
    app.appendChild(el('<p class="view-sub">Pick a set, answer, and get instant feedback with a full explanation.</p>'));
    const restart = () => {
      buildPracticeQueue();
      renderPractice();
    };
    app.appendChild(filterBar(restart));
    const holder = el("<div></div>");
    app.appendChild(holder);

    if (!practice.queue.length) buildPracticeQueue();

    function renderPractice() {
      stopTimer();
      holder.innerHTML = "";
      if (!practice.queue.length) {
        holder.appendChild(el('<div class="empty">No questions match this filter yet. <a href="https://github.com/DMDaudio/OpenMat/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">Add one!</a></div>'));
        return;
      }
      if (practice.index >= practice.queue.length) {
        holder.appendChild(
          el(
            '<div class="card" style="text-align:center">' +
            "<h3>Set complete 🎉</h3>" +
            "<p>You scored <strong>" + practice.correctCount + " / " + practice.doneCount + "</strong>" +
            (practice.doneCount ? " in " + formatTime(practice.sessionSec) + " — average " + formatTime(practice.sessionSec / practice.doneCount) + " per question" : "") +
            ".</p>" +
            '<div class="action-row" style="justify-content:center">' +
            '<button class="btn primary" data-act="again">New set</button>' +
            '<a class="btn ghost" href="#/browse">Browse all</a>' +
            "</div></div>"
          )
        );
        holder.querySelector('[data-act="again"]').addEventListener("click", restart);
        return;
      }

      const q = DATA.questions.find((x) => x.id === practice.queue[practice.index]);
      practice.answered = false;
      const choices = choicesFor(q);
      const letters = Object.keys(choices);

      const card = el('<div class="card"></div>');
      card.appendChild(
        el(
          '<div class="practice-progress">' +
          "<span>Question " + (practice.index + 1) + " of " + practice.queue.length + "</span>" +
          '<span class="timer" data-timer>&#9201; 0:00</span>' +
          '<span class="scorepill">Score ' + practice.correctCount + " / " + practice.doneCount + "</span>" +
          "</div>"
        )
      );
      card.appendChild(el('<div class="card-meta">' + questionBadges(q) + "</div>"));
      card.appendChild(el('<div class="prose">' + renderMarkdown(q.prompt) + "</div>"));

      const list = el('<div class="choices"></div>');
      letters.forEach((L) => {
        const btn = el(
          '<button class="choice"><span class="letter">' + L + "</span><span>" + renderInline(choices[L]) + "</span></button>"
        );
        btn.addEventListener("click", () => onAnswer(L));
        list.appendChild(btn);
      });
      card.appendChild(list);
      const feedback = el("<div></div>");
      card.appendChild(feedback);
      holder.appendChild(card);

      // Start the per-question timer (counts up until the question is answered).
      const timerEl = card.querySelector("[data-timer]");
      practice.startTs = Date.now();
      practice.timerId = setInterval(() => {
        if (timerEl) timerEl.textContent = "⏱ " + formatTime((Date.now() - practice.startTs) / 1000);
      }, 1000);

      function onAnswer(letter) {
        if (practice.answered) return;
        practice.answered = true;
        stopTimer();
        const elapsed = (Date.now() - practice.startTs) / 1000;
        practice.sessionSec += elapsed;
        if (timerEl) timerEl.textContent = "⏱ " + formatTime(elapsed);
        const correct = letter === String(q.answer);
        practice.doneCount++;
        if (correct) practice.correctCount++;
        recordAnswer(q.id, correct, elapsed);
        const pill = card.querySelector(".scorepill");
        if (pill) pill.textContent = "Score " + practice.correctCount + " / " + practice.doneCount;

        const btns = list.querySelectorAll(".choice");
        btns.forEach((b, i) => {
          const L = letters[i];
          b.disabled = true;
          if (L === String(q.answer)) b.classList.add("correct");
          else if (L === letter) b.classList.add("wrong");
        });

        const tgt = targetFor(q.section);
        const over = elapsed > tgt;
        feedback.innerHTML =
          '<div class="verdict ' + (correct ? "correct" : "wrong") + '">' +
          (correct ? "Correct! ✓" : "Not quite — the answer is " + escapeHtml(String(q.answer)) + ".") +
          "</div>" +
          '<div class="pace ' + (over ? "over" : "under") + '">⏱ You took <strong>' + formatTime(elapsed) +
          "</strong> · target ~" + formatTime(tgt) + " · " + (over ? "over pace" : "on pace") + "</div>" +
          '<div class="reveal"><h4>Explanation</h4><div class="prose">' +
          renderMarkdown(q.explanation) +
          "</div></div>";

        if (q.hints && q.hints.length) {
          const hints = el(
            '<details class="hints"><summary>Show hints (' + q.hints.length + ")</summary>" +
            '<ul class="hint-list">' +
            q.hints.map((h) => "<li>" + renderInline(h) + "</li>").join("") +
            "</ul></details>"
          );
          feedback.appendChild(hints);
        }

        const isLast = practice.index + 1 >= practice.queue.length;
        const actions = el(
          '<div class="action-row">' +
          '<button class="btn primary" data-act="next">' + (isLast ? "Finish" : "Next question →") + "</button>" +
          "</div>"
        );
        actions.querySelector('[data-act="next"]').addEventListener("click", () => {
          practice.index++;
          renderPractice();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
        feedback.appendChild(actions);
      }
    }

    renderPractice();
  }

  function viewBrowse() {
    let section = "all";
    let difficulty = "all";
    let query = "";

    app.innerHTML = "";
    app.appendChild(el('<h2 class="view-title">Browse the question bank</h2>'));
    app.appendChild(el('<p class="view-sub">' + DATA.counts.questions + " questions. Click any question to reveal the answer and explanation.</p>"));

    const bar = el(
      '<div class="filters">' +
      '<select data-f="section"><option value="all">All sections</option><option value="quant">Quantitative</option><option value="verbal">Verbal</option><option value="data-insights">Data Insights</option></select>' +
      '<select data-f="difficulty"><option value="all">All difficulties</option><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option></select>' +
      '<input type="search" placeholder="Search text or topic…" data-f="q" />' +
      "</div>"
    );
    app.appendChild(bar);
    const listHolder = el("<div></div>");
    app.appendChild(listHolder);

    function draw() {
      let items = DATA.questions.slice();
      if (section !== "all") items = items.filter((q) => q.section === section);
      if (difficulty !== "all") items = items.filter((q) => q.difficulty === difficulty);
      if (query) {
        const ql = query.toLowerCase();
        items = items.filter(
          (q) =>
            (q.prompt || "").toLowerCase().includes(ql) ||
            (q.topic || "").includes(ql) ||
            (q.subtopic || "").includes(ql) ||
            (q.tags || []).join(" ").includes(ql)
        );
      }
      listHolder.innerHTML = "";
      if (!items.length) {
        listHolder.appendChild(el('<div class="empty">No questions match.</div>'));
        return;
      }
      items.forEach((q) => {
        const row = el(
          '<div class="row"><div class="row-head">' +
          '<span class="row-title">' + escapeHtml(titleCase(q.topic) + " · " + titleCase(q.subtopic)) + "</span>" +
          questionBadges(q) +
          "</div><div class='row-body'></div></div>"
        );
        const head = row.querySelector(".row-head");
        const body = row.querySelector(".row-body");
        let built = false;
        head.addEventListener("click", () => {
          row.classList.toggle("open");
          if (!built) {
            const choices = choicesFor(q);
            const choiceHtml = Object.keys(choices)
              .map((L) => "<li><strong>" + L + ".</strong> " + renderInline(choices[L]) + "</li>")
              .join("");
            body.innerHTML =
              '<div class="prose">' + renderMarkdown(q.prompt) + "</div>" +
              (choiceHtml ? '<ol type="A" style="margin:12px 0">' + choiceHtml + "</ol>" : "") +
              '<div class="reveal"><h4>Answer: ' + escapeHtml(String(q.answer)) + "</h4>" +
              '<div class="prose">' + renderMarkdown(q.explanation) + "</div></div>";
            built = true;
          }
        });
        listHolder.appendChild(row);
      });
    }

    bar.querySelector('[data-f="section"]').addEventListener("change", (e) => { section = e.target.value; draw(); });
    bar.querySelector('[data-f="difficulty"]').addEventListener("change", (e) => { difficulty = e.target.value; draw(); });
    bar.querySelector('[data-f="q"]').addEventListener("input", (e) => { query = e.target.value.trim(); draw(); });
    draw();
  }

  function viewLessons() {
    app.innerHTML = "";
    app.appendChild(el('<h2 class="view-title">Lessons</h2>'));
    app.appendChild(el('<p class="view-sub">Concept explanations by topic. Click to read.</p>'));
    if (!DATA.lessons.length) {
      app.appendChild(el('<div class="empty">No lessons yet. <a href="https://github.com/DMDaudio/OpenMat/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">Write the first one!</a></div>'));
      return;
    }
    DATA.lessons.forEach((l) => {
      const row = el(
        '<div class="row"><div class="row-head">' +
        '<span class="row-title">' + escapeHtml(l.title) + "</span>" +
        '<span class="badges section-' + l.section + '">' + badge("sec", sectionLabel(l.section)) + (l.status ? badge(l.status, l.status) : "") + "</span>" +
        "</div><div class='row-body'></div></div>"
      );
      const head = row.querySelector(".row-head");
      const body = row.querySelector(".row-body");
      let built = false;
      head.addEventListener("click", () => {
        row.classList.toggle("open");
        if (!built) {
          body.innerHTML = '<div class="prose lesson-body">' + renderMarkdown(l.body) + "</div>";
          built = true;
        }
      });
      app.appendChild(row);
    });
  }

  function viewAbout() {
    app.innerHTML =
      '<div class="prose-page">' +
      "<h2>About OpenMat</h2>" +
      "<p>OpenMat is free, community-sourced prep for the <strong>GMAT Focus Edition</strong>. " +
      "Commercial courses cost hundreds of dollars; we think a solid, openly-licensed curriculum and " +
      "question bank should be free — built and reviewed by the people using it.</p>" +
      "<h2>Principles</h2>" +
      "<ul>" +
      "<li><strong>Free forever</strong> — no paywall, openly licensed (content CC&nbsp;BY-SA&nbsp;4.0, code MIT).</li>" +
      "<li><strong>Original only</strong> — we never copy real, copyrighted GMAT questions.</li>" +
      "<li><strong>Quality-controlled</strong> — every question is verified by a second contributor before it's trusted.</li>" +
      "<li><strong>Structured</strong> — content is tagged data, so it can power practice, search, and more.</li>" +
      "</ul>" +
      "<h2>Contribute</h2>" +
      '<p>The bank grows with the community. Write a question, review one, or fix an error on ' +
      '<a href="https://github.com/DMDaudio/OpenMat" target="_blank" rel="noopener">GitHub</a>. ' +
      'Start with the <a href="https://github.com/DMDaudio/OpenMat/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">contributing guide</a>.</p>' +
      '<p class="disclaimer">Independent community project. Not affiliated with or endorsed by GMAC, ' +
      "which owns the GMAT™ trademark and the official exam.</p>" +
      "</div>";
  }

  // ---- Profile (local-first) ----------------------------------------------
  function computeProgressStats() {
    const p = loadProgress();
    const ans = p.answered || {};
    const perSection = {};
    Object.keys(DATA.sections).forEach((s) => {
      perSection[s] = { label: DATA.sections[s], total: 0, attempted: 0, correct: 0, timeSum: 0, timeCount: 0 };
    });
    let attempted = 0, correct = 0, timeSum = 0, timeCount = 0;
    DATA.questions.forEach((q) => {
      const sec = perSection[q.section];
      if (sec) sec.total++;
      const a = ans[q.id];
      if (!a) return;
      attempted++;
      if (sec) sec.attempted++;
      if (a.result === "correct") { correct++; if (sec) sec.correct++; }
      if (typeof a.timeSec === "number") {
        timeSum += a.timeSec; timeCount++;
        if (sec) { sec.timeSum += a.timeSec; sec.timeCount++; }
      }
    });
    return { totalQ: DATA.questions.length, attempted, correct, timeSum, timeCount, perSection, handle: p.handle || "" };
  }

  function pct(n, d) { return d ? Math.round((n / d) * 100) + "%" : "—"; }

  function downloadProgress() {
    const data = JSON.stringify(loadProgress(), null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "openmat-progress.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function viewProfile() {
    const s = computeProgressStats();
    app.innerHTML = "";
    app.appendChild(el('<h2 class="view-title">Your profile</h2>'));
    app.appendChild(el('<p class="view-sub">Your study progress lives in this browser and is restored automatically when you return. Use export/import to move it between devices.</p>'));

    // Headline stats
    const avg = s.timeCount ? formatTime(s.timeSum / s.timeCount) : "—";
    app.appendChild(
      el(
        '<div class="stat-grid">' +
        '<div class="stat-card"><h3>Attempted</h3><div class="big">' + s.attempted + "</div><div class='sub'>of " + s.totalQ + " questions</div></div>" +
        '<div class="stat-card"><h3>Accuracy</h3><div class="big">' + pct(s.correct, s.attempted) + "</div><div class='sub'>" + s.correct + " correct</div></div>" +
        '<div class="stat-card"><h3>Avg. time</h3><div class="big">' + avg + "</div><div class='sub'>per question</div></div>" +
        "</div>"
      )
    );

    // Per-section breakdown
    const secRows = Object.keys(s.perSection)
      .map((k) => {
        const d = s.perSection[k];
        const acc = pct(d.correct, d.attempted);
        const t = d.timeCount ? formatTime(d.timeSum / d.timeCount) : "—";
        const coverage = d.total ? Math.round((d.attempted / d.total) * 100) : 0;
        return (
          '<div class="prof-row section-' + k + '">' +
          '<div class="prof-row-top"><span class="prof-sec">' + escapeHtml(d.label) + "</span>" +
          "<span class='prof-nums'>" + d.attempted + "/" + d.total + " attempted · " + acc + " correct · " + t + " avg</span></div>" +
          '<div class="bar"><div class="bar-fill" style="width:' + coverage + '%"></div></div>' +
          "</div>"
        );
      })
      .join("");
    app.appendChild(el('<div class="prose-page"><h2>By section</h2>' + secRows + "</div>"));

    // Data controls
    const controls = el(
      '<div class="prose-page"><h2>Your data</h2>' +
      "<p>Progress is saved in this browser only. Download a backup to keep it safe or move it to another device.</p>" +
      '<div class="action-row">' +
      '<button class="btn" data-act="export">⬇ Export backup</button>' +
      '<button class="btn" data-act="import">⬆ Import backup</button>' +
      '<button class="btn ghost" data-act="reset">Reset progress</button>' +
      '<input type="file" accept="application/json" data-file style="display:none" />' +
      "</div></div>"
    );
    controls.querySelector('[data-act="export"]').addEventListener("click", downloadProgress);
    const fileInput = controls.querySelector("[data-file]");
    controls.querySelector('[data-act="import"]').addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(reader.result);
          if (!parsed || typeof parsed !== "object" || !parsed.answered) throw new Error("Not an OpenMat backup.");
          parsed.version = 2;
          saveProgress(parsed);
          viewProfile();
        } catch (e) {
          alert("Could not import that file: " + e.message);
        }
      };
      reader.readAsText(file);
    });
    controls.querySelector('[data-act="reset"]').addEventListener("click", () => {
      if (confirm("Reset all your study progress? This cannot be undone (export a backup first if unsure).")) {
        const keep = loadProgress().handle || "";
        saveProgress({ version: 2, handle: keep, answered: {} });
        viewProfile();
      }
    });
    app.appendChild(controls);

    // Contributions (read-only from GitHub's public data)
    const contrib = el(
      '<div class="prose-page"><h2>Contributions</h2>' +
      "<p>OpenMat is built by its community. Enter your GitHub handle to highlight your contributions below.</p>" +
      '<div class="filters"><input type="text" data-handle placeholder="your-github-handle" value="' + escapeHtml(s.handle) + '" /></div>' +
      '<div data-contriblist class="contrib-list"><span class="sub">Loading contributors…</span></div>' +
      '<p class="sub" style="margin-top:14px">Personal, cross-device contribution tracking would need accounts — see the roadmap. ' +
      '<a href="https://github.com/DMDaudio/OpenMat/graphs/contributors" target="_blank" rel="noopener">All contributors ↗</a></p>' +
      "</div>"
    );
    const handleInput = contrib.querySelector("[data-handle]");
    handleInput.addEventListener("change", () => {
      const p = loadProgress();
      p.handle = handleInput.value.trim().replace(/^@/, "");
      saveProgress(p);
      renderContributors();
    });
    app.appendChild(contrib);

    const listEl = contrib.querySelector("[data-contriblist]");
    function renderContributors() {
      const mine = (loadProgress().handle || "").toLowerCase();
      fetch("https://api.github.com/repos/DMDaudio/OpenMat/contributors?per_page=100")
        .then((r) => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
        .then((rows) => {
          if (!Array.isArray(rows) || !rows.length) { listEl.innerHTML = '<span class="sub">No contributors listed yet.</span>'; return; }
          listEl.innerHTML = rows
            .map((c) => {
              const isMe = c.login && c.login.toLowerCase() === mine;
              return (
                '<a class="contrib' + (isMe ? " me" : "") + '" href="' + escapeHtml(c.html_url) + '" target="_blank" rel="noopener">' +
                '<img src="' + escapeHtml(c.avatar_url) + '&s=48" alt="" width="28" height="28" loading="lazy" />' +
                "<span>" + escapeHtml(c.login) + "</span>" +
                '<span class="contrib-count">' + c.contributions + "</span>" +
                (isMe ? '<span class="badge sec section-quant">you</span>' : "") +
                "</a>"
              );
            })
            .join("");
        })
        .catch(() => {
          listEl.innerHTML = '<span class="sub">Couldn\'t load the live contributor list (GitHub rate limit). ' +
            '<a href="https://github.com/DMDaudio/OpenMat/graphs/contributors" target="_blank" rel="noopener">View on GitHub ↗</a></span>';
        });
    }
    renderContributors();
  }

  const routes = { "": viewHome, practice: viewPractice, browse: viewBrowse, lessons: viewLessons, profile: viewProfile, about: viewAbout };

  function router() {
    stopTimer();
    const name = location.hash.replace(/^#\/?/, "").split("/")[0];
    setActiveNav(name);
    (routes[name] || viewHome)();
  }

  // ---- Boot ---------------------------------------------------------------
  fetch("data/content.json")
    .then((r) => {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    })
    .then((data) => {
      DATA = data;
      window.addEventListener("hashchange", router);
      router();
    })
    .catch((err) => {
      app.innerHTML =
        '<div class="error-box">Could not load content (' + escapeHtml(err.message) +
        "). If you opened this file directly, run it through a local server instead " +
        "(<code>node scripts/serve.mjs</code>).</div>";
    });
})();
