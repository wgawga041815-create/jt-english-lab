/* 俊通达 · 外贸英语练习站 */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const KEY = "jt-english-v1";

const state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return Object.assign({ known: [], grammar: {}, listening: {}, speaking: {} }, JSON.parse(raw));
  } catch (e) {}
  return { known: [], grammar: {}, listening: {}, speaking: {} };
}
function save() {
  localStorage.setItem(KEY, JSON.stringify(state));
  updateTop();
}
function updateTop() {
  const el = $("#topProgress");
  if (el) el.textContent = `${state.known.length} / ${WORDS.length}`;
}

/* ---------------- audio ---------------- */
let cachedVoice = null;
function pickVoice() {
  if (cachedVoice) return cachedVoice;
  if (!("speechSynthesis" in window)) return null;
  const vs = speechSynthesis.getVoices();
  if (!vs.length) return null;
  cachedVoice =
    vs.find(v => /Samantha|Alex|Google US English|Jenny|Aria/i.test(v.name)) ||
    vs.find(v => v.lang && v.lang.toLowerCase().startsWith("en-us")) ||
    vs.find(v => v.lang && v.lang.toLowerCase().startsWith("en"));
  return cachedVoice;
}
if ("speechSynthesis" in window) speechSynthesis.onvoiceschanged = () => { cachedVoice = null; pickVoice(); };

function speak(text, rate = 0.86) {
  if (!("speechSynthesis" in window)) return toast("当前浏览器不支持发音");
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = rate;
  const v = pickVoice();
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}
function speakQueue(lines, rate = 0.86) {
  if (!("speechSynthesis" in window)) return toast("当前浏览器不支持发音");
  speechSynthesis.cancel();
  const v = pickVoice();
  lines.forEach(t => {
    const u = new SpeechSynthesisUtterance(t);
    u.lang = "en-US";
    u.rate = rate;
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  });
}

/* ---------------- toast / modal ---------------- */
let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 1800);
}
function openModal(html) {
  $("#modal").innerHTML = html;
  $("#modalBackdrop").hidden = false;
  document.body.style.overflow = "hidden";
}
function closeModal() {
  $("#modalBackdrop").hidden = true;
  $("#modal").innerHTML = "";
  document.body.style.overflow = "";
}
$("#modalBackdrop").addEventListener("click", e => { if (e.target.id === "modalBackdrop") closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ---------------- nav ---------------- */
const renders = {
  home: renderHome,
  words: renderWords,
  grammar: renderGrammar,
  listening: renderListening,
  speaking: renderSpeaking,
};
let currentTab = "home";

function show(tab) {
  if (!renders[tab]) tab = "home";
  currentTab = tab;
  $$(".view").forEach(v => v.classList.remove("active"));
  $(`#view-${tab}`).classList.add("active");
  $$("#tabs button").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  renders[tab]();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("#tabs").addEventListener("click", e => {
  const b = e.target.closest("button[data-tab]");
  if (b) show(b.dataset.tab);
});
$(".brand").addEventListener("click", e => { e.preventDefault(); show("home"); });

/* ---------------- helpers ---------------- */
function shuffle(a) {
  const arr = a.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function catName(id) {
  const c = CATEGORIES.find(x => x.id === id);
  return c ? c.name : id;
}
function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}
function wordsDone() { return state.known.length; }
function grammarDone() { return Object.keys(state.grammar).length; }
function listeningDone() { return Object.keys(state.listening).length; }
function speakingDone() { return Object.keys(state.speaking).length; }

/* ---------------- home ---------------- */
function renderHome() {
  const v = $("#view-home");
  v.innerHTML = `
    <div class="hero">
      <div class="hero-main">
        <span class="kicker">俊通达 · 充电器与数据线</span>
        <h1>外贸英语</h1>
        <div class="hero-actions">
          <button class="btn btn-primary" data-go="words">开始 5 个单词</button>
          <button class="btn" data-go="listening">先练听力</button>
        </div>
        <p style="margin:14px 0 0;font-size:11.5px;color:#9a9285">建议用 Chrome / Edge 打开，发音和录音最稳。</p>
      </div>
      <div class="hero-side">
        <div>
          <span class="kicker">Your progress</span>
          <h3>每天 15 分钟，<br>词、听力、口语各练一点。</h3>
          <p>${WORDS.length} 个高频词、${GRAMMAR.length} 个语法点、${LISTENING.length} 组对话、${SPEAKING.length} 个口语任务。</p>
        </div>
        <div class="side-stat"><b>${state.known.length}</b><span>/ ${WORDS.length} 个词已认识</span></div>
      </div>
    </div>

    <div class="stats">
      <div class="stat"><b>${state.known.length}</b><span>已认识单词</span></div>
      <div class="stat"><b>${grammarDone()} / ${GRAMMAR.length}</b><span>语法点完成</span></div>
      <div class="stat"><b>${listeningDone()} / ${LISTENING.length}</b><span>听力组完成</span></div>
      <div class="stat"><b>${speakingDone()} / ${SPEAKING.length}</b><span>口语任务完成</span></div>
    </div>

    <div class="section-head">
      <div><span class="kicker">Today</span><h2>今天练什么</h2><p>四件事，15 分钟。做完就算打卡。</p></div>
    </div>
    <div class="task-grid">
      <div class="task-card">
        <span class="label">Words · 5 min</span>
        <h4>5 个单词</h4>
        <p>先认，再测。不熟的会自动回到队列。</p>
        <button class="btn btn-sm" data-quiz="5">开始</button>
      </div>
      <div class="task-card">
        <span class="label">Grammar · 4 min</span>
        <h4>1 个语法点</h4>
        <p>一个规则 + 6 道题，错题马上解释。</p>
        <button class="btn btn-sm" data-grammar-first="1">开始</button>
      </div>
      <div class="task-card">
        <span class="label">Listening · 3 min</span>
        <h4>1 组听力</h4>
        <p>先听大意，再听细节。可隐藏文本。</p>
        <button class="btn btn-sm" data-listen-first="1">开始</button>
      </div>
      <div class="task-card">
        <span class="label">Speaking · 3 min</span>
        <h4>1 个口语任务</h4>
        <p>录一遍，听一遍，再对照示范改一句。</p>
        <button class="btn btn-sm" data-speak-first="1">开始</button>
      </div>
    </div>

    <div class="section-head" style="margin-top:34px">
      <div><span class="kicker">Vocabulary</span><h2>词库进度</h2><p>${CATEGORIES.length} 个场景，按你的节奏往下推。</p></div>
      <button class="btn btn-sm" data-go="words">去单词</button>
    </div>
    <div class="panel">
      ${CATEGORIES.map(c => {
        const total = WORDS.filter(w => w.c === c.id).length;
        const known = WORDS.filter(w => w.c === c.id && state.known.includes(w.en)).length;
        const pct = total ? Math.round((known / total) * 100) : 0;
        return `<div class="cat-row">
          <span class="cat-name">${c.name}</span>
          <span class="progress-bar"><span style="width:${pct}%"></span></span>
          <span class="cat-count">${known} / ${total}</span>
        </div>`;
      }).join("")}
    </div>
  `;

  v.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => show(b.dataset.go)));
  v.querySelectorAll("[data-quiz]").forEach(b => b.addEventListener("click", () => startQuiz(Number(b.dataset.quiz))));
  v.querySelector("[data-grammar-first]").addEventListener("click", () => {
    const next = GRAMMAR.find(g => !state.grammar[g.id]) || GRAMMAR[0];
    show("grammar"); openGrammar(next.id);
  });
  v.querySelector("[data-listen-first]").addEventListener("click", () => {
    const next = LISTENING.find(l => !state.listening[l.id]) || LISTENING[0];
    show("listening"); openListening(next.id);
  });
  v.querySelector("[data-speak-first]").addEventListener("click", () => {
    const next = SPEAKING.find(s => !state.speaking[s.id]) || SPEAKING[0];
    show("speaking"); openSpeaking(next.id);
  });
}

/* ---------------- words ---------------- */
let wordFilter = { cat: "all", q: "" };

function renderWords() {
  const v = $("#view-words");
  v.innerHTML = `
    <div class="section-head">
      <div><span class="kicker">Vocabulary</span><h2>单词</h2><p>${WORDS.length} 个高频词，全部来自充电器外贸的真实场景。</p></div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-sm" id="spellBtn">拼写练习</button>
        <button class="btn btn-primary btn-sm" id="quizBtn">测验 10 题</button>
      </div>
    </div>
    <div class="toolbar">
      <input class="search" id="wordSearch" placeholder="搜英文或中文…" />
      <div class="chips" id="catChips">
        <button class="chip active" data-cat="all">全部</button>
        ${CATEGORIES.map(c => `<button class="chip" data-cat="${c.id}">${c.name}</button>`).join("")}
      </div>
    </div>
    <div class="word-grid" id="wordGrid"></div>
  `;

  $("#quizBtn").addEventListener("click", () => startQuiz(10));
  $("#spellBtn").addEventListener("click", () => startSpelling(8));
  $$("#catChips .chip").forEach(ch => ch.addEventListener("click", () => {
    wordFilter.cat = ch.dataset.cat;
    wordLimit = 60;
    $$("#catChips .chip").forEach(x => x.classList.toggle("active", x === ch));
    renderWordGrid();
  }));
  $("#wordSearch").addEventListener("input", e => {
    wordFilter.q = e.target.value.trim().toLowerCase();
    wordLimit = 60;
    renderWordGrid();
  });
  renderWordGrid();
}

function filteredWords() {
  return WORDS.filter(w => {
    if (wordFilter.cat !== "all" && w.c !== wordFilter.cat) return false;
    if (wordFilter.q) {
      const q = wordFilter.q;
      return w.en.toLowerCase().includes(q) || w.zh.includes(q);
    }
    return true;
  });
}

let wordLimit = 60;

function renderWordGrid() {
  const grid = $("#wordGrid");
  if (!grid) return;
  const all = filteredWords();
  if (!all.length) { grid.innerHTML = `<div class="empty">没有找到，换个关键词试试。</div>`; return; }
  const list = all.slice(0, wordLimit);
  grid.innerHTML = list.map(w => `
    <article class="word-card ${state.known.includes(w.en) ? "known" : ""}" data-en="${esc(w.en)}">
      <div class="word-top">
        <span class="word-en">${esc(w.en)}</span>
        <span class="pos">${esc(w.pos)}</span>
      </div>
      <div class="word-zh">${esc(w.zh)}</div>
    </article>`).join("") + (all.length > wordLimit
      ? `<button class="btn" id="loadMore" style="grid-column:1/-1;justify-self:center;margin-top:8px">加载更多（${wordLimit} / ${all.length}）</button>`
      : "");

  grid.querySelectorAll(".word-card").forEach(card => {
    card.addEventListener("click", () => {
      const w = WORDS.find(x => x.en === card.dataset.en);
      if (w) openWord(w);
    });
  });
  const more = $("#loadMore");
  if (more) more.addEventListener("click", () => { wordLimit += 60; renderWordGrid(); });
}

function openWord(w) {
  const known = state.known.includes(w.en);
  openModal(`
    <div class="sub">${catName(w.c)} · 点“显示中文”再看意思</div>
    <div class="flash-pos">${esc(w.pos)}</div>
    <div class="flash-en">${esc(w.en)}</div>
    <div class="flash-zh" id="flashZh" style="visibility:hidden">${esc(w.zh)}</div>
    ${w.ex ? `<div class="flash-ex" id="flashEx">${esc(w.ex)}<br><span style="color:#9a9285">${esc(w.exZh || "")}</span></div>` : ""}
    <div class="modal-actions">
      <button class="btn btn-sm" id="sayWord">🔊 听发音</button>
      <button class="btn btn-sm" id="revealWord">显示中文</button>
      <button class="btn btn-primary btn-sm" id="markKnown">${known ? "已认识 ✓" : "认识了"}</button>
      <button class="btn btn-sm" id="markUnknown">还要练</button>
    </div>
  `);
  $("#sayWord").addEventListener("click", () => speak(w.en, 0.82));
  $("#revealWord").addEventListener("click", () => {
    $("#flashZh").style.visibility = "visible";
    const ex = $("#flashEx");
    if (ex) ex.classList.add("show");
  });
  $("#markKnown").addEventListener("click", () => {
    if (!state.known.includes(w.en)) state.known.push(w.en);
    save(); closeModal(); renderWordGrid(); toast("记下了，稍后会再考你");
  });
  $("#markUnknown").addEventListener("click", () => {
    state.known = state.known.filter(x => x !== w.en);
    save(); closeModal(); renderWordGrid(); toast("已放回待练队列");
  });
  speak(w.en, 0.82);
}

/* ---------------- quiz ---------------- */
function startQuiz(n) {
  let pool = shuffle(WORDS.filter(w => !state.known.includes(w.en)));
  if (pool.length < n) pool = pool.concat(shuffle(WORDS.filter(w => state.known.includes(w.en))));
  const items = pool.slice(0, Math.min(n, pool.length));
  if (!items.length) return toast("没有可测的词");

  const questions = items.map(w => {
    const others = shuffle(WORDS.filter(x => x.zh !== w.zh)).slice(0, 3).map(x => x.zh);
    return { w, options: shuffle([w.zh, ...others]) };
  });
  const answers = [];
  let idx = 0;

  function dots() {
    return `<div class="quiz-progress">${questions.map((_, i) =>
      `<span class="dot ${answers[i] === true ? "ok" : answers[i] === false ? "no" : i === idx ? "now" : ""}"></span>`).join("")}</div>`;
  }

  function render() {
    const q = questions[idx];
    openModal(`
      <div class="sub">看英文，选中文 · 第 ${idx + 1} / ${questions.length} 题</div>
      ${dots()}
      <div class="quiz-word">${esc(q.w.en)} <button class="btn btn-sm" id="sayQ" style="vertical-align:middle">🔊</button></div>
      <div class="quiz-options" id="quizOptions">
        ${q.options.map((o, i) => `<button data-i="${i}">${esc(o)}</button>`).join("")}
      </div>
      <div class="modal-actions"><button class="btn btn-sm" id="quitQuiz">退出</button></div>
    `);
    $("#sayQ").addEventListener("click", () => speak(q.w.en, 0.82));
    $("#quitQuiz").addEventListener("click", closeModal);
    $$("#quizOptions button").forEach(btn => btn.addEventListener("click", () => {
      if (answers[idx] !== undefined) return;
      const chosen = q.options[Number(btn.dataset.i)];
      const correct = chosen === q.w.zh;
      answers[idx] = correct;
      btn.classList.add(correct ? "correct" : "wrong");
      if (!correct) {
        $$("#quizOptions button").forEach(b => { if (b.textContent === q.w.zh) b.classList.add("correct"); });
      }
      if (correct) {
        if (!state.known.includes(q.w.en)) state.known.push(q.w.en);
        save();
      }
      setTimeout(() => {
        idx++;
        if (idx < questions.length) render(); else finish();
      }, correct ? 550 : 1250);
    }));
  }

  function finish() {
    const score = answers.filter(Boolean).length;
    openModal(`
      <div class="sub">完成</div>
      <h2>${score} / ${questions.length}</h2>
      <p style="color:#6f6a61">答对的词已自动标为“认识”。错词会留在待练队列里。</p>
      <div class="modal-actions">
        <button class="btn btn-primary" id="again">再来一组</button>
        <button class="btn" id="doneQuiz">去看看单词</button>
      </div>
    `);
    $("#again").addEventListener("click", () => startQuiz(n));
    $("#doneQuiz").addEventListener("click", () => { closeModal(); show("words"); });
  }

  render();
}

/* ---------------- spelling ---------------- */
function startSpelling(n) {
  let pool = shuffle(WORDS.filter(w => !state.known.includes(w.en)));
  if (pool.length < n) pool = shuffle(WORDS);
  const items = pool.slice(0, Math.min(n, pool.length));
  let idx = 0, score = 0;

  function render() {
    const w = items[idx];
    openModal(`
      <div class="sub">听发音，拼出单词 · 第 ${idx + 1} / ${items.length} 题</div>
      <div class="flash-zh">${esc(w.zh)}</div>
      <div style="color:#9a9285;font-size:12.5px;margin-top:2px">${esc(w.pos)} · ${catName(w.c)}</div>
      <button class="btn btn-sm" id="spellPlay" style="margin-top:12px">🔊 再听一遍</button>
      <input class="spell-input" id="spellInput" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="在这里输入英文…" />
      <div class="modal-actions">
        <button class="btn btn-primary" id="spellCheck">检查</button>
        <button class="btn" id="spellSkip">不会，跳过</button>
      </div>
      <div class="why" id="spellWhy"></div>
    `);
    const input = $("#spellInput");
    input.focus();
    $("#spellPlay").addEventListener("click", () => speak(w.en, 0.8));
    speak(w.en, 0.8);

    const check = () => {
      const val = input.value.trim().toLowerCase();
      if (!val) return;
      if (val === w.en.toLowerCase()) {
        score++;
        if (!state.known.includes(w.en)) state.known.push(w.en);
        save();
        $("#spellWhy").textContent = "对！" + w.ex;
        $("#spellWhy").classList.add("show");
        setTimeout(next, 800);
      } else {
        $("#spellWhy").innerHTML = `正确拼写：<b>${esc(w.en)}</b><br>${esc(w.ex)}`;
        $("#spellWhy").classList.add("show");
        input.disabled = true;
        setTimeout(next, 1600);
      }
    };
    $("#spellCheck").addEventListener("click", check);
    input.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
    $("#spellSkip").addEventListener("click", next);
  }

  function next() {
    idx++;
    if (idx < items.length) render(); else {
      openModal(`
        <div class="sub">拼写练习完成</div>
        <h2>${score} / ${items.length}</h2>
        <p style="color:#6f6a61">拼对的词已经进入“认识”；拼错的会在测验里再出现。</p>
        <div class="modal-actions"><button class="btn btn-primary" id="spellDone">回到单词</button></div>
      `);
      $("#spellDone").addEventListener("click", () => { closeModal(); show("words"); });
    }
  }

  render();
}

/* ---------------- grammar ---------------- */
function renderGrammar() {
  const v = $("#view-grammar");
  v.innerHTML = `
    <div class="section-head">
      <div><span class="kicker">Grammar</span><h2>基础语法</h2><p>${GRAMMAR.length} 个点，全是报价、交期、邮件里马上会用到的。</p></div>
      <div class="progress-pill">${grammarDone()} / ${GRAMMAR.length} 完成</div>
    </div>
    <div class="word-grid">
      ${GRAMMAR.map((g, i) => `
        <article class="word-card ${state.grammar[g.id] ? "known" : ""}" data-gid="${g.id}">
          <div class="word-top">
            <span class="word-en" style="font-size:17px">${i + 1}. ${esc(g.title)}</span>
          </div>
          <div class="word-zh">${esc(g.sub)}</div>
          <div class="word-ex" style="display:block">${state.grammar[g.id] ? "已完成 · 得分 " + state.grammar[g.id].score + "/" + state.grammar[g.id].total : "6 道题"}</div>
        </article>`).join("")}
    </div>
    <div class="panel" style="margin-top:22px">
      <h3>建议顺序</h3>
      <p style="margin:0;color:#6f6a61;font-size:13px">先做 1–5（be 动词、一般现在时、进行时、过去时、情态动词），这是报价和邮件的地基；再做 6–10（单复数、冠词、介词、比较级、被动语态）。每天一个点，不要一次刷完。</p>
    </div>
  `;
  v.querySelectorAll("[data-gid]").forEach(card => {
    card.addEventListener("click", () => openGrammar(card.dataset.gid));
  });
}

function openGrammar(id) {
  const g = GRAMMAR.find(x => x.id === id);
  if (!g) return;
  const v = $("#view-grammar");
  const answers = new Array(g.questions.length).fill(undefined);
  v.innerHTML = `
    <div class="detail-head">
      <button class="back" id="backGrammar">← 返回语法</button>
      <div class="sub">${esc(g.title)}</div>
    </div>
    <div class="panel">
      <h3>${esc(g.title)}</h3>
      <div class="rule">${esc(g.rule)}</div>
      ${g.examples.map(e => `<div class="example"><div class="en">${esc(e.en)} <button class="btn btn-sm" data-say="${esc(e.en)}">🔊</button></div><div class="zh">${esc(e.zh)}</div></div>`).join("")}
    </div>
    <div class="panel">
      <h3>练一练</h3>
      <div id="gQuestions">
        ${g.questions.map((q, qi) => `
          <div class="question" data-q="${qi}">
            <div class="q">${qi + 1}. ${esc(q.q)}</div>
            <div class="options">
              ${q.o.map((o, oi) => `<button class="option" data-qi="${qi}" data-oi="${oi}">${esc(o)}</button>`).join("")}
            </div>
            <div class="why" id="why-${qi}"></div>
          </div>`).join("")}
      </div>
      <div class="modal-actions"><button class="btn btn-primary" id="finishGrammar" disabled>完成这一课</button></div>
    </div>
  `;
  $("#backGrammar").addEventListener("click", renderGrammar);
  v.querySelectorAll("[data-say]").forEach(b => b.addEventListener("click", () => speak(b.dataset.say)));
  v.querySelectorAll(".option").forEach(btn => btn.addEventListener("click", () => {
    const qi = Number(btn.dataset.qi), oi = Number(btn.dataset.oi);
    if (answers[qi] !== undefined) return;
    const q = g.questions[qi];
    answers[qi] = oi;
    const wrap = v.querySelector(`.question[data-q="${qi}"]`);
    wrap.querySelectorAll(".option").forEach((b, i) => {
      if (i === q.a) b.classList.add("correct");
      if (i === oi && oi !== q.a) b.classList.add("wrong");
    });
    const why = $(`#why-${qi}`);
    why.textContent = (oi === q.a ? "对。" : "正确答案：" + q.o[q.a] + "。") + q.why;
    why.classList.add("show");
    if (answers.every(a => a !== undefined)) {
      const score = answers.filter((a, i) => a === g.questions[i].a).length;
      const btn2 = $("#finishGrammar");
      btn2.disabled = false;
      btn2.textContent = `完成这一课（${score}/${g.questions.length}）`;
      btn2.onclick = () => {
        state.grammar[g.id] = { score, total: g.questions.length };
        save();
        toast("这一课完成了");
        renderGrammar();
      };
    }
  }));
}

/* ---------------- listening ---------------- */
let listenBand = 0;
function renderListening() {
  const v = $("#view-listening");
  const list = LISTENING.filter(l => !listenBand || l.band === listenBand);
  v.innerHTML = `
    <div class="section-head">
      <div><span class="kicker">Listening</span><h2>听力</h2><p>${LISTENING.length} 组真实场景，从慢速到真实语速。先听结构，再听细节。</p></div>
      <div class="progress-pill">${listeningDone()} / ${LISTENING.length} 完成</div>
    </div>
    <div class="chips" style="margin:0 0 18px">
      <button class="chip ${listenBand === 0 ? "active" : ""}" data-band="0">全部</button>
      <button class="chip ${listenBand === 1 ? "active" : ""}" data-band="1">初级</button>
      <button class="chip ${listenBand === 2 ? "active" : ""}" data-band="2">中级</button>
      <button class="chip ${listenBand === 3 ? "active" : ""}" data-band="3">高级</button>
    </div>
    <div class="listen-set">
      ${list.map(l => `
        <article class="listen-card" data-lid="${l.id}">
          <div class="level">${esc(l.level)}</div>
          <h4>${esc(l.title)}</h4>
          <p>${esc(l.desc)}</p>
          <div style="margin-top:12px;color:#9a9285;font-size:11.5px">${state.listening[l.id] ? "已完成 · " + state.listening[l.id].score + "/" + state.listening[l.id].total : "3 道理解题"}</div>
        </article>`).join("")}
    </div>
    <div class="panel" style="margin-top:22px">
      <h3>三遍听法</h3>
      <div class="example"><div class="en">第一遍 · 听结构</div><div class="zh">不看文本，只听“谁、什么事、什么数字”。听不懂也继续听完。</div></div>
      <div class="example"><div class="en">第二遍 · 听细节</div><div class="zh">点“显示文本”前，先逐句听；卡住再点开，把那个词圈出来。</div></div>
      <div class="example"><div class="en">第三遍 · 跟读</div><div class="zh">慢半拍跟着说，模仿语速和重音；不要一个词一个词念。</div></div>
    </div>
  `;
  v.querySelectorAll("[data-lid]").forEach(c => c.addEventListener("click", () => openListening(c.dataset.lid)));
  v.querySelectorAll("[data-band]").forEach(b => b.addEventListener("click", () => {
    listenBand = Number(b.dataset.band);
    renderListening();
  }));
}

function openListening(id) {
  const l = LISTENING.find(x => x.id === id);
  if (!l) return;
  const v = $("#view-listening");
  let blur = true;
  const answers = new Array(l.questions.length).fill(undefined);

  v.innerHTML = `
    <div class="detail-head">
      <button class="back" id="backListen">← 返回听力</button>
      <div class="sub">${esc(l.level)} · ${esc(l.title)}</div>
    </div>
    <div class="panel">
      <h3>${esc(l.title)}</h3>
      <p style="color:#6f6a61;margin:0 0 12px">${esc(l.desc)}</p>
      <div class="listen-controls">
        <button class="btn btn-sm btn-primary" id="playAll">▶ 播放全部</button>
        <button class="btn btn-sm" id="toggleBlur">显示文本</button>
        <button class="btn btn-sm" id="toggleZh">显示中文</button>
      </div>
      <div id="lines" class="${blur ? "blurred" : ""}">
        ${l.lines.map((ln, i) => `
          <div class="line-row" data-i="${i}">
            <button class="play" data-say="${esc(ln.en)}">▶</button>
            <div class="sp">${esc(ln.sp)}</div>
            <div>
              <div class="en">${esc(ln.en)}</div>
              <div class="zh">${esc(ln.zh)}</div>
            </div>
          </div>`).join("")}
      </div>
    </div>
    <div class="panel">
      <h3>听懂了没有</h3>
      ${l.questions.map((q, qi) => `
        <div class="question" data-q="${qi}">
          <div class="q">${qi + 1}. ${esc(q.q)}</div>
          <div class="options">
            ${q.o.map((o, oi) => `<button class="option" data-qi="${qi}" data-oi="${oi}">${esc(o)}</button>`).join("")}
          </div>
          <div class="why" id="lwhy-${qi}"></div>
        </div>`).join("")}
    </div>
  `;

  $("#backListen").addEventListener("click", renderListening);
  $("#playAll").addEventListener("click", () => speakQueue(l.lines.map(x => x.en)));
  $("#toggleBlur").addEventListener("click", e => {
    blur = !blur;
    $("#lines").classList.toggle("blurred", blur);
    e.target.textContent = blur ? "显示文本" : "隐藏文本";
  });
  $("#toggleZh").addEventListener("click", () => {
    const on = $("#lines").classList.toggle("show-zh");
    $("#toggleZh").textContent = on ? "隐藏中文" : "显示中文";
  });
  v.querySelectorAll("[data-say]").forEach(b => b.addEventListener("click", () => speak(b.dataset.say)));

  v.querySelectorAll(".option").forEach(btn => btn.addEventListener("click", () => {
    const qi = Number(btn.dataset.qi), oi = Number(btn.dataset.oi);
    if (answers[qi] !== undefined) return;
    const q = l.questions[qi];
    answers[qi] = oi;
    const wrap = v.querySelector(`.question[data-q="${qi}"]`);
    wrap.querySelectorAll(".option").forEach((b, i) => {
      if (i === q.a) b.classList.add("correct");
      if (i === oi && oi !== q.a) b.classList.add("wrong");
    });
    const why = $(`#lwhy-${qi}`);
    why.textContent = q.why;
    why.classList.add("show");
    if (answers.every(a => a !== undefined)) {
      const score = answers.filter((a, i) => a === l.questions[i].a).length;
      state.listening[l.id] = { score, total: l.questions.length };
      save();
      toast(`这组听力完成：${score}/${l.questions.length}`);
    }
  }));
}

/* ---------------- speaking ---------------- */
let speakBand = 0;
function renderSpeaking() {
  const v = $("#view-speaking");
  const list = SPEAKING.filter(s => !speakBand || s.band === speakBand);
  v.innerHTML = `
    <div class="section-head">
      <div><span class="kicker">Speaking</span><h2>口语</h2><p>${SPEAKING.length} 个任务，每个 30–60 秒。先看句架，再录，再对照示范。</p></div>
      <div class="progress-pill">${speakingDone()} / ${SPEAKING.length} 完成</div>
    </div>
    <div class="chips" style="margin:0 0 18px">
      <button class="chip ${speakBand === 0 ? "active" : ""}" data-band="0">全部</button>
      <button class="chip ${speakBand === 1 ? "active" : ""}" data-band="1">初级</button>
      <button class="chip ${speakBand === 2 ? "active" : ""}" data-band="2">中级</button>
      <button class="chip ${speakBand === 3 ? "active" : ""}" data-band="3">高级</button>
    </div>
    <div class="speak-grid">
      ${list.map(s => `
        <article class="speak-card" data-sid="${s.id}">
          <span class="tag">${esc(s.tag)}</span>
          <h4>${esc(s.title)}</h4>
          <p>${esc(s.prompt)}</p>
          <div style="margin-top:10px;color:#9a9285;font-size:11.5px">${state.speaking[s.id] ? "已练过 · 再录一遍" : "未开始"}</div>
        </article>`).join("")}
    </div>
  `;
  v.querySelectorAll("[data-sid]").forEach(c => c.addEventListener("click", () => openSpeaking(c.dataset.sid)));
  v.querySelectorAll("[data-band]").forEach(b => b.addEventListener("click", () => {
    speakBand = Number(b.dataset.band);
    renderSpeaking();
  }));
}

function openSpeaking(id) {
  const s = SPEAKING.find(x => x.id === id);
  if (!s) return;
  const v = $("#view-speaking");
  let recorder = null, chunks = [], stream = null, timer = null, seconds = 0;

  v.innerHTML = `
    <div class="detail-head">
      <button class="back" id="backSpeak">← 返回口语</button>
      <div class="sub">${esc(s.tag)} · ${esc(s.title)}</div>
    </div>
    <div class="panel">
      <h3>${esc(s.title)}</h3>
      <p style="color:#4f4a42;margin:0 0 8px">${esc(s.prompt)}</p>
      <div class="frames">${s.frames.map(f => `<div class="frame">${esc(f)}</div>`).join("")}</div>

      <div class="record-box">
        <button class="rec-btn" id="recBtn">●</button>
        <div>
          <div class="timer" id="timer">00:00</div>
          <div class="rec-hint" id="recHint">点一下开始录音，最长 60 秒</div>
        </div>
        <audio id="recAudio" controls style="display:none;max-width:260px"></audio>
      </div>

      <div class="modal-actions">
        <button class="btn btn-sm" id="showModel">看示范</button>
        <button class="btn btn-sm" id="checkSpeech">跟读检测</button>
        <button class="btn btn-primary btn-sm" id="doneSpeak">我练完了</button>
      </div>
      <div class="model-box" id="modelBox">
        <div class="en">${esc(s.model)}</div>
        <div class="zh">示范答案 · 先听一遍，再模仿语气</div>
        <button class="btn btn-sm" id="sayModel" style="margin-top:10px">🔊 听示范</button>
      </div>
      <div class="why" id="speechResult" style="margin-top:12px"></div>
    </div>
  `;

  $("#backSpeak").addEventListener("click", () => { stopRec(); renderSpeaking(); });
  $("#showModel").addEventListener("click", () => {
    $("#modelBox").classList.toggle("show");
    state.speaking[s.id] = true; save();
  });
  $("#sayModel").addEventListener("click", () => speak(s.model, 0.82));
  $("#doneSpeak").addEventListener("click", () => {
    state.speaking[s.id] = true; save();
    toast("已记录，下一题继续");
    renderSpeaking();
  });

  const btn = $("#recBtn"), timerEl = $("#timer"), hint = $("#recHint"), audio = $("#recAudio");

  async function startRec() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
      hint.textContent = "当前浏览器不支持录音，可以先大声跟读示范。";
      return;
    }
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (e) {
      hint.textContent = "没有拿到麦克风权限，请在浏览器设置里允许后重试。";
      return;
    }
    chunks = [];
    recorder = new MediaRecorder(stream);
    const mime = recorder.mimeType || "audio/webm";
    recorder.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: mime });
      audio.src = URL.createObjectURL(blob);
      audio.style.display = "block";
      state.speaking[s.id] = true; save();
    };
    recorder.start();
    seconds = 0;
    timerEl.textContent = "00:00";
    hint.textContent = "正在录音… 说完点一下停止";
    btn.classList.add("recording");
    timer = setInterval(() => {
      seconds++;
      timerEl.textContent = `00:${String(seconds).padStart(2, "0")}`;
      if (seconds >= 60) stopRec();
    }, 1000);
  }

  function stopRec() {
    clearInterval(timer);
    btn.classList.remove("recording");
    if (recorder && recorder.state !== "inactive") recorder.stop();
    if (stream) stream.getTracks().forEach(t => t.stop());
    recorder = null; stream = null;
  }

  btn.addEventListener("click", () => {
    if (recorder && recorder.state === "recording") stopRec();
    else startRec();
  });

  // speech recognition (optional)
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { $("#checkSpeech").style.display = "none"; }
  else {
    $("#checkSpeech").addEventListener("click", () => {
      const rec = new SR();
      rec.lang = "en-US";
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      $("#speechResult").textContent = "请朗读示范，识别中…";
      $("#speechResult").classList.add("show");
      rec.onresult = ev => {
        const said = ev.results[0][0].transcript.toLowerCase();
        const hit = s.keywords.filter(k => said.includes(k.toLowerCase()));
        const pct = Math.round((hit.length / s.keywords.length) * 100);
        $("#speechResult").innerHTML = `识别到：<i>${esc(said)}</i><br>关键词命中 ${pct}%（${hit.length}/${s.keywords.length}）` +
          (pct >= 60 ? " · 不错，再说一遍会更顺。" : " · 先放慢，把关键词说清楚。");
      };
      rec.onerror = () => { $("#speechResult").textContent = "没有识别到，换个安静的环境再试。"; };
      rec.start();
    });
  }
}

/* ---------------- boot ---------------- */
updateTop();
const bootParams = new URLSearchParams(location.search);
show(bootParams.get("tab") || "home");

if (bootParams.get("selftest") === "1") {
  const out = [];
  const ok = (name, cond) => out.push((cond ? "PASS" : "FAIL") + " · " + name);
  const clean = () => !document.body.textContent.includes("undefined");
  try {
    ok("1000 words", WORDS.length === 1000);
    ok("all words complete", WORDS.every(w => w.en && w.zh && w.c));
    ok("10 categories", CATEGORIES.length === 10);
    ok("16 grammar lessons", GRAMMAR.length === 16);
    ok("6 questions each", GRAMMAR.every(g => g.questions.length === 6));
    ok("answers in range", GRAMMAR.every(g => g.questions.every(q => q.a >= 0 && q.a < q.o.length)));
    ok("30 listening sets", LISTENING.length === 30);
    ok("4 lines each", LISTENING.every(l => l.lines.length === 4));
    ok("36 speaking tasks", SPEAKING.length === 36);

    show("home"); ok("home renders", document.querySelectorAll("#view-home .task-card").length === 4 && clean());
    show("words"); ok("words render", document.querySelectorAll("#wordGrid .word-card").length === 60 && clean());
    openWord(WORDS[0]); ok("word modal", !!document.querySelector("#modal .flash-en")); closeModal();
    startQuiz(5); ok("quiz modal", document.querySelectorAll("#modal .dot").length === 5); closeModal();

    show("grammar"); ok("grammar renders", document.querySelectorAll("#view-grammar [data-gid]").length === 16 && clean());
    openGrammar("g1"); ok("grammar detail", document.querySelectorAll("#view-grammar .question").length === 6 && clean());

    show("listening"); ok("listening renders", document.querySelectorAll("#view-listening [data-lid]").length === 30 && clean());
    openListening("l1"); ok("listening detail", document.querySelectorAll("#view-listening .line-row").length === 4 && document.querySelectorAll("#view-listening .question").length === 3 && clean());

    show("speaking"); ok("speaking renders", document.querySelectorAll("#view-speaking [data-sid]").length === 36 && clean());
    openSpeaking("s1"); ok("speaking detail", !!document.querySelector("#recBtn") && clean());

  } catch (e) {
    out.push("ERROR · " + e.message);
  }
  document.body.innerHTML = '<pre id="selftest" style="padding:30px;font:14px/1.7 Menlo,monospace">' + out.join("\n") + '</pre>';
}
