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
  const STORE_KEY = "openmat.progress.v1";
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY)) || { answered: {} };
    } catch (e) {
      return { answered: {} };
    }
  }
  function saveProgress(p) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(p));
    } catch (e) {}
  }
  function recordAnswer(id, correct) {
    const p = loadProgress();
    p.answered[id] = correct ? "correct" : "wrong";
    saveProgress(p);
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
  const practice = { queue: [], index: 0, section: "all", difficulty: "all", answered: false, correctCount: 0, doneCount: 0 };

  function buildPracticeQueue() {
    let pool = DATA.questions.slice();
    if (practice.section !== "all") pool = pool.filter((q) => q.section === practice.section);
    if (practice.difficulty !== "all") pool = pool.filter((q) => q.difficulty === practice.difficulty);
    practice.queue = shuffle(pool.map((q) => q.id));
    practice.index = 0;
    practice.answered = false;
    practice.correctCount = 0;
    practice.doneCount = 0;
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
            "<p>You scored <strong>" + practice.correctCount + " / " + practice.doneCount + "</strong>.</p>" +
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

      function onAnswer(letter) {
        if (practice.answered) return;
        practice.answered = true;
        const correct = letter === String(q.answer);
        practice.doneCount++;
        if (correct) practice.correctCount++;
        recordAnswer(q.id, correct);
        const pill = card.querySelector(".scorepill");
        if (pill) pill.textContent = "Score " + practice.correctCount + " / " + practice.doneCount;

        const btns = list.querySelectorAll(".choice");
        btns.forEach((b, i) => {
          const L = letters[i];
          b.disabled = true;
          if (L === String(q.answer)) b.classList.add("correct");
          else if (L === letter) b.classList.add("wrong");
        });

        feedback.innerHTML =
          '<div class="verdict ' + (correct ? "correct" : "wrong") + '">' +
          (correct ? "Correct! ✓" : "Not quite — the answer is " + escapeHtml(String(q.answer)) + ".") +
          "</div>" +
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

  const routes = { "": viewHome, practice: viewPractice, browse: viewBrowse, lessons: viewLessons, about: viewAbout };

  function router() {
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
