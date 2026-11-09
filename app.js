"use strict";
/* ---------- Content (from the Cycle dashboard Page) ---------- */
const ORDER = ["menstrual", "follicular", "ovulatory", "luteal"];
const LABEL = { menstrual: "Menstrual", follicular: "Follicular", ovulatory: "Ovulatory", luteal: "Luteal" };
const EMOJI = { menstrual: "💧", follicular: "🌱", ovulatory: "✨", luteal: "🌙" };
const GRAD = { menstrual: ["#F7A8B8", "#E0526A"], follicular: ["#9DE8D8", "#2BB8A0"], ovulatory: ["#FFD19A", "#FF8F6B"], luteal: ["#D4B7F0", "#8B5FBF"] };
const SOLID = { menstrual: "#E0526A", follicular: "#2BB8A0", ovulatory: "#FF8F6B", luteal: "#8B5FBF" };
const ENERGY = { menstrual: 28, follicular: 72, ovulatory: 92, luteal: 45 };
const WEATHER = {
  menstrual: { sky: "🌧️", label: "Soft rain", line: "Quieter feelings, more rest. Be gentle with yourself." },
  follicular: { sky: "🌤️", label: "Clearing skies", line: "Mood often lifts as oestrogen rises. A fresh-start feeling." },
  ovulatory: { sky: "☀️", label: "Full sun", line: "Many people feel brightest, most social and most articulate." },
  luteal: { sky: "⛅", label: "Cloudy with feelings", line: "Sensitivity can rise as progesterone peaks then falls. Not a flaw." },
};
const GUIDES = {
  menstrual: {
    expect: "Your body is shedding. Rest is productive, not lazy.",
    daysNote: "About days 1–5 on a 28-day cycle (bleeding). Day 1 is the first day of your period.",
    hormones: "Oestrogen and progesterone are at their lowest while the womb lining sheds.",
    emotions: ["Many people feel more inward, tired, or sensitive", "Cramps and lower mood can make focus harder", "A quieter social pace often feels kinder"],
    energy: "Usually lower",
    doList: ["MBA: lighter review, reading, and organising notes rather than big presentations", "Movement: gentle walks, stretching, or yoga if it eases cramps", "Social: small plans or solo time; say no without over-explaining", "Relationship: ask for comfort and practical help; keep hard talks short"],
    avoid: ["Stacking high-stakes debates or all-nighters", "Skipping meals when you feel nauseous or low", "Judging yourself for needing more rest"],
    eat: ["Iron: lentils (lentilles), spinach (épinards), quinoa, lean red meat if you eat it", "Warm broths, ginger tea, and easy cooked veg", "Dark chocolate (70%+) in a small square for magnesium and comfort", "Avocado and olive oil for steady energy"],
    meals: [["🍲", "Lentil & spinach soup", "With a soft-boiled egg for iron and protein"], ["🥗", "Quinoa comfort bowl", "Roasted sweet potato and avocado"], ["🍫", "Chocolate oatmeal", "Banana, dark cocoa, pumpkin seeds"]],
    nutrients: "Iron (to replace menstrual loss), fluids, and gentle magnesium-rich foods.",
  },
  follicular: {
    expect: "Energy and optimism often rebound. A lovely window to rebuild momentum.",
    daysNote: "About days 6–13, after bleeding eases, while a follicle matures.",
    hormones: "Oestrogen rises. FSH supports follicle growth; energy often follows.",
    emotions: ["Many notice clearer mood and more optimism", "Curiosity and confidence often rebound", "A good window for starting fresh routines"],
    energy: "Rising",
    doList: ["MBA: tackle harder problem sets, group projects, and new material", "Movement: rebuild intensity: strength training, runs, dance", "Social: networking, coffee dates, collaborative study", "Relationship: plan something fun; share ideas and goals"],
    avoid: ["Overbooking every free hour just because energy is up", "Ignoring leftover fatigue from your period week"],
    eat: ["Colourful plants: berries, leafy greens, peppers", "Lean protein: eggs, fish, yogurt, beans", "Fermented options you like (yogurt, kefir) for gut comfort", "Seeds and nuts for steady snacks between classes"],
    meals: [["🥣", "Berry yogurt bowl", "Greek yogurt, oats, pumpkin seeds"], ["🐟", "Salmon quinoa salad", "Avocado, citrus, leafy greens"], ["🍳", "Huevos rancheros", "Eggs, tomato salsa, black beans"]],
    nutrients: "Protein, fibre, and a wide mix of plants while appetite may feel lighter.",
  },
  ovulatory: {
    expect: "A bright, social peak for many. Great for presence and clear asks.",
    daysNote: "About days 14–16 on a 28-day cycle (egg release is brief; the fertile window is a few days around it).",
    hormones: "An LH surge triggers ovulation; oestrogen peaks, then progesterone begins to rise.",
    emotions: ["Many feel more outgoing, verbal, and socially sharp", "Libido and confidence can peak", "A strong window for connection and visibility"],
    energy: "Often high",
    doList: ["MBA: presentations, interviews, pitching ideas, oral exams", "Movement: higher-intensity sessions if you feel good", "Social: say yes to gatherings that matter", "Relationship: deeper talks, affection, clear asks; you may feel more articulate"],
    avoid: ["Assuming every high-energy day means you must perform", "Skipping meals when busy; blood sugar dips hit harder"],
    eat: ["Antioxidant-rich fruit and veg (berries, leafy greens)", "Fibre to support oestrogen metabolism (beans, whole grains)", "Salmon or other oily fish, olive oil, avocado", "Hydration: water, herbal tea, agua de limón"],
    meals: [["🍋", "Grilled salmon plate", "Spinach and roasted peppers"], ["🥑", "Chickpea avocado toast", "Tomato and a squeeze of lime"], ["🌿", "Citrus fish salad", "Cooked white fish, lime, coriander"]],
    nutrients: "Fibre, colourful plants, and omega-3 rich foods when available.",
  },
  luteal: {
    expect: "Feelings can run closer to the surface. Softness beats self-critique.",
    daysNote: "About days 17–28. Late luteal is roughly the last week before your period.",
    hormones: "Progesterone rises after ovulation, then falls if there is no pregnancy. That drop is linked to PMS for many people.",
    emotions: ["Irritability, sadness, anxiety, or feeling unseen can show up", "Lower patience and a shorter fuse are common, not a character flaw", "You may want more reassurance and less stimulation"],
    energy: "Often dips toward the end",
    doList: ["MBA: finish drafts early; prefer deep work over last-minute group stress", "Movement: steady walks, pilates, lighter strength; skip ego PRs", "Social: smaller circles; leave early without guilt", "Relationship: name needs calmly; schedule important talks for cooler days if you can"],
    avoid: ["Starting fights when what you need is comfort or clarity", "Caffeine overload late in the day", "Alcohol if it worsens mood or sleep", "All-or-nothing food rules when cravings rise"],
    eat: ["Magnesium: pumpkin seeds, dark chocolate, bananas, buckwheat", "Calcium-rich foods: yogurt, cheese, fortified plant milks (calcium can ease PMS for some)", "B6-containing foods: chickpeas, potato, banana, poultry", "Complex carbs: quinoa, oats, sweet potato help steady mood and cravings", "Avocado, spinach, lentils for staying power"],
    meals: [["🎃", "Squash quinoa bowl", "Black beans, avocado, roasted squash"], ["🥔", "Spinach tortilla", "Potato, greens, side of yogurt"], ["🍛", "Chickpea curry night", "Brown rice and a square of dark chocolate"]],
    nutrients: "Calcium, magnesium, and B6-rich foods have the strongest lifestyle evidence for PMS comfort; results vary person to person.",
  },
};

/* ---------- Storage ---------- */
const KEY = "mycycle.v1";
const DEFAULTS = { history: ["2026-10-20"], length: 28, useAvg: true };
function load() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || "null");
    if (s && Array.isArray(s.history) && s.history.length) {
      return { history: s.history.filter(isYmd).sort(), length: clampLen(s.length), useAvg: s.useAvg !== false };
    }
  } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULTS));
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
let state = load();
if (!state.history.length) state.history = DEFAULTS.history.slice();

/* ---------- Date helpers ---------- */
function isYmd(v) { return typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v) && !!parseYmd(v); }
function parseYmd(v) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(v).trim()); if (!m) return null;
  const d = new Date(+m[1], +m[2] - 1, +m[3]);
  return d.getMonth() === +m[2] - 1 && d.getDate() === +m[3] ? d : null;
}
function ymd(d) { return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; }
function sod(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
function diffDays(a, b) { return Math.round((sod(a) - sod(b)) / 86400000); }
function addDays(d, n) { const o = sod(d); o.setDate(o.getDate() + n); return o; }
function fLong(d) { return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" }); }
function fShort(d) { return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" }); }
function clampLen(n) { n = Math.round(Number(n)); return Number.isFinite(n) ? Math.min(40, Math.max(21, n)) : 28; }

/* ---------- Cycle math ---------- */
function windows(L) {
  const m = Math.max(1, Math.round(5 * L / 28));
  const f = Math.max(m + 1, Math.round(13 * L / 28));
  const o = Math.max(f + 1, Math.round(16 * L / 28));
  return { menstrual: { start: 1, end: m }, follicular: { start: m + 1, end: f }, ovulatory: { start: f + 1, end: o }, luteal: { start: o + 1, end: L } };
}
function phaseFor(day, L) { const w = windows(L); return day <= w.menstrual.end ? "menstrual" : day <= w.follicular.end ? "follicular" : day <= w.ovulatory.end ? "ovulatory" : "luteal"; }
function gaps() {
  const h = state.history.map(parseYmd);
  const g = [];
  for (let i = 1; i < h.length; i++) { const d = diffDays(h[i], h[i - 1]); if (d >= 15 && d <= 60) g.push(d); }
  return g;
}
function averageLen() { const g = gaps(); return g.length ? g.reduce((a, b) => a + b, 0) / g.length : null; }
function effectiveLen() { const a = averageLen(); return state.useAvg && a ? clampLen(a) : state.length; }

function model() {
  const start = parseYmd(state.history[state.history.length - 1]);
  const today = sod(new Date());
  const L = effectiveLen();
  const elapsed = diffDays(today, start);
  const day = elapsed < 0 ? 1 : ((elapsed % L) + L) % L + 1;
  const phase = phaseFor(day, L);
  const w = windows(L);
  const daysUntil = (L - day + 1) % L;
  const ci = Math.floor(Math.max(0, elapsed) / L);
  const nextPeriod = addDays(start, (ci + 1) * L);
  const passed = day > w.ovulatory.end;
  const base = (passed ? ci + 1 : ci) * L;
  return {
    start, today, L, day, phase, w, daysUntil, nextPeriod,
    ovFrom: addDays(start, base + w.ovulatory.start - 1), ovTo: addDays(start, base + w.ovulatory.end - 1),
    late: phase === "luteal" && day >= L - 7, overdue: elapsed >= L,
  };
}

/* ---------- UI state ---------- */
let M = model();
let nav = "home";
let viewPhase = null;      // phase chosen in Phases / Food
let detailTab = "emotions";
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const NAVS = ["home", "phases", "food", "you"];

/* ---------- SVG builders ---------- */
function wheelSVG(sel, uid) {
  const cx = 170, cy = 170, ro = 132, ri = 84, L = M.L;
  const polar = (d, r) => { const a = -Math.PI / 2 + ((d - 1) / L) * Math.PI * 2; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
  const arc = (s, e) => {
    const [x1, y1] = polar(s, ro), [x2, y2] = polar(e + 1, ro), [x3, y3] = polar(e + 1, ri), [x4, y4] = polar(s, ri);
    const lg = (e - s + 1) / L > 0.5 ? 1 : 0;
    return `M${x1} ${y1}A${ro} ${ro} 0 ${lg} 1 ${x2} ${y2}L${x3} ${y3}A${ri} ${ri} 0 ${lg} 0 ${x4} ${y4}Z`;
  };
  const [mx, my] = polar(M.day + 0.5, (ro + ri) / 2);
  const defs = ORDER.map((id) => `<linearGradient id="${uid}-${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${GRAD[id][0]}"/><stop offset="1" stop-color="${GRAD[id][1]}"/></linearGradient>`).join("");
  const arcs = ORDER.map((id) => {
    const r = M.w[id]; if (r.start > r.end) return "";
    const on = id === sel;
    return `<path class="arc${on ? " on" : ""}" data-phase="${id}" d="${arc(r.start, r.end)}" fill="url(#${uid}-${id})" opacity="${on ? 1 : 0.42}" stroke="rgba(255,255,255,.85)" stroke-width="${on ? 3 : 1.5}"><title>${LABEL[id]}</title></path>`;
  }).join("");
  const c = SOLID[M.phase];
  return `<svg viewBox="0 0 340 340" role="img" aria-label="Cycle day ${M.day} of ${M.L}">
    <defs>${defs}<radialGradient id="${uid}-halo"><stop offset=".6" stop-color="${GRAD[M.phase][0]}" stop-opacity="0"/><stop offset=".85" stop-color="${GRAD[M.phase][0]}" stop-opacity=".55"/><stop offset="1" stop-color="${GRAD[M.phase][0]}" stop-opacity="0"/></radialGradient>
    <filter id="${uid}-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
    <circle class="ring-halo" cx="${cx}" cy="${cy}" r="166" fill="url(#${uid}-halo)"/>
    <circle cx="${cx}" cy="${cy}" r="${ro + 10}" fill="rgba(255,255,255,.4)"/>
    ${arcs}
    <circle cx="${cx}" cy="${cy}" r="${ri - 3}" fill="#FFF8FA"/>
    <text x="${cx}" y="${cy - 26}" text-anchor="middle" fill="#A08896" font-size="12" font-weight="500" letter-spacing="1">CYCLE TRACKER</text>
    <text x="${cx}" y="${cy + 8}" text-anchor="middle" fill="#2B1A24" font-size="38" font-weight="700">Day ${M.day}</text>
    <text x="${cx}" y="${cy + 32}" text-anchor="middle" fill="${c}" font-size="14" font-weight="600">of ${M.L} · ${LABEL[M.phase]}</text>
    <circle class="marker-glow" cx="${mx}" cy="${my}" r="13" fill="#fff" stroke="${c}" stroke-width="3" filter="url(#${uid}-glow)"/>
    <circle cx="${mx}" cy="${my}" r="5.5" fill="${c}"/>
  </svg>`;
}
function daysRingSVG() {
  const size = 84, sw = 8, r = (size - sw) / 2, C = 2 * Math.PI * r;
  const p = M.daysUntil === 0 ? 1 : 1 - M.daysUntil / M.L;
  const off = C * (1 - Math.min(1, Math.max(0, p)));
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <defs><linearGradient id="dr-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${GRAD[M.phase][0]}"/><stop offset="1" stop-color="${GRAD[M.phase][1]}"/></linearGradient></defs>
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="rgba(255,255,255,.6)" stroke="rgba(0,0,0,.06)" stroke-width="${sw}"/>
    <circle class="ring-arc" cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="url(#dr-g)" stroke-width="${sw}" stroke-linecap="round"
      stroke-dasharray="${C}" stroke-dashoffset="${C}" data-off="${off}" transform="rotate(-90 ${size / 2} ${size / 2})"/>
  </svg><div class="lbl"><div class="n">${M.daysUntil}</div><div class="t">${M.daysUntil === 0 ? "period due" : M.daysUntil === 1 ? "day left" : "days left"}</div></div>`;
}
function timelineSVG() {
  const w = 640, h = 70, L = M.L; let dots = "";
  for (let d = 1; d <= L; d++) {
    const t = (d - 1) / Math.max(1, L - 1), x = 20 + t * (w - 40), y = h - 18 - Math.sin(Math.PI * t) * 24;
    const today = d === M.day, c = SOLID[phaseFor(d, L)];
    dots += today
      ? `<circle class="marker-glow" cx="${x}" cy="${y}" r="11" fill="${c}" opacity=".35"/><circle cx="${x}" cy="${y}" r="7" fill="${c}" stroke="#fff" stroke-width="2.5"/>`
      : `<circle cx="${x}" cy="${y}" r="3.6" fill="${c}" opacity=".6"/>`;
  }
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" aria-hidden="true"><path d="M20 ${h - 18}Q${w / 2} ${-6} ${w - 20} ${h - 18}" fill="none" stroke="rgba(180,120,150,.3)" stroke-width="2" stroke-dasharray="2 6" stroke-linecap="round"/>${dots}</svg>
  <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text3);padding:0 4px"><span>Day 1</span><span>Day ${L}</span></div>`;
}
function ebar(level, color, name, value, big) {
  return `<div class="ebar${big ? " big" : ""}"><div class="row"><span>${name}</span><b>${esc(value)}</b></div><div class="track"><div class="fill" data-w="${level}" style="background:linear-gradient(90deg,${color}88,${color})"></div></div></div>`;
}
function chips(sel, target) {
  return ORDER.map((id) => `<button type="button" class="chip${id === sel ? " on" : ""}" style="--c:${SOLID[id]}" data-phase="${id}" data-target="${target}"><span class="dot" style="background:linear-gradient(135deg,${GRAD[id][0]},${GRAD[id][1]})"></span>${LABEL[id]}</button>`).join("");
}
function li(items, icon) { return `<ul class="list">${items.map((t) => `<li data-i="${icon}">${esc(t)}</li>`).join("")}</ul>`; }

/* ---------- Render ---------- */
function setTheme() {
  const r = document.documentElement.style;
  r.setProperty("--accent", SOLID[M.phase]); r.setProperty("--g0", GRAD[M.phase][0]); r.setProperty("--g1", GRAD[M.phase][1]);
}
function setPhaseVars(el, id) { el.style.setProperty("--pg0", GRAD[id][0]); el.style.setProperty("--pg1", GRAD[id][1]); el.style.setProperty("--c", SOLID[id]); }

function renderHeader() {
  $("#todayLabel").textContent = M.today.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
  $("#phasePill").textContent = `${EMOJI[M.phase]} Day ${M.day} of ${M.L}`;
}
function renderHome() {
  const g = GUIDES[M.phase];
  $("#statusDate").textContent = `${M.late ? "Late luteal" : "Days " + M.w[M.phase].start + "–" + M.w[M.phase].end} · day ${M.day} of ${M.L}`;
  $("#statusPhase").textContent = `${EMOJI[M.phase]} ${LABEL[M.phase]} phase`;
  $("#statusExpect").textContent = g.expect;
  $("#daysRing").innerHTML = daysRingSVG();
  $("#wheelHome").innerHTML = wheelSVG(M.phase, "wh");
  $("#chipsHome").innerHTML = chips(M.phase, "phases");
  $("#timeline").innerHTML = timelineSVG();
  const wx = WEATHER[M.phase];
  $("#weather").innerHTML = `<div class="label">Mood weather</div><span class="sky">${wx.sky}</span><div class="h3">${wx.label}</div><p class="body">${wx.line}</p>`;
  $("#energyCard").innerHTML = `<div class="label">⚡ Energy</div>` +
    ebar(ENERGY[M.phase], SOLID[M.phase], "Today", g.energy, true) +
    ORDER.filter((p) => p !== M.phase).map((p) => ebar(ENERGY[p], SOLID[p], LABEL[p], "typical")).join("");
  const ico = (p, e) => `<div class="ico" style="background:linear-gradient(135deg,${GRAD[p][0]},${GRAD[p][1]})">${e}</div>`;
  $("#upcoming").innerHTML =
    `<div class="rowi">${ico("menstrual", "💧")}<div><div class="tt">Next period</div><div class="ss">${fLong(M.nextPeriod)} · ${M.daysUntil === 0 ? "due today" : M.daysUntil === 1 ? "1 day left" : M.daysUntil + " days left"}</div></div></div>` +
    `<div class="rowi">${ico("ovulatory", "✨")}<div><div class="tt">Ovulation window</div><div class="ss">${fShort(M.ovFrom)} – ${fShort(M.ovTo)} (estimate)</div></div></div>` +
    `<div class="rowi">${ico("luteal", "📅")}<div><div class="tt">Last period started</div><div class="ss">${fLong(M.start)}${M.overdue ? " · tap the button below if a new one started" : ""}</div></div></div>`;
  let care = `<div class="h3">Today’s care · day ${M.day}</div><p class="body" style="margin-top:6px">${g.hormones}</p>
    <div class="sub">🌸 Best to do</div>${li(g.doList, "✅")}
    <div class="sub">🍽️ Nourish</div>${li(g.eat.slice(0, 3), "🥗")}`;
  if (M.phase === "luteal") care += `<div class="callout"><div class="h3">💗 If you feel like picking a fight</div><p class="body">Pause before you send the text. Name the feeling (“I feel unseen / sad / bristly”). Ask for one concrete need (“Can we put phones down for ten minutes?”) instead of a character attack. Revisit the bigger talk when you feel steadier.</p></div>`;
  $("#care").innerHTML = care;
}
function renderPhases() {
  const p = viewPhase || M.phase, g = GUIDES[p], w = M.w[p];
  $("#wheelPhases").innerHTML = wheelSVG(p, "wp");
  $("#chipsPhases").innerHTML = chips(p, "phases");
  const el = $("#phaseDetail"); setPhaseVars(el, p);
  const tabs = [["emotions", "💭 Mood"], ["do", "✨ Do"], ["avoid", "🚫 Avoid"], ["food", "🥗 Food"]];
  const items = detailTab === "emotions" ? li(g.emotions, "💭") : detailTab === "do" ? li(g.doList, "✅") : detailTab === "avoid" ? li(g.avoid, "⛔") : li(g.eat, "🍽️");
  el.innerHTML = `<div class="badge">${EMOJI[p]} ${LABEL[p]} · days ${w.start}–${w.end}${p === M.phase ? " · now" : ""}</div>
    <div class="h2">${g.expect}</div><p class="body">${g.daysNote}</p>
    <p class="body" style="margin-top:8px"><b style="color:var(--text)">Hormones: </b>${g.hormones}</p>
    <div style="height:14px"></div>${ebar(ENERGY[p], SOLID[p], "⚡ Energy", g.energy, true)}
    <div class="segs" id="segs"><span class="seg-ind"></span>${tabs.map(([id, l]) => `<button type="button" data-tab="${id}" class="${id === detailTab ? "on" : ""}">${l}</button>`).join("")}</div>
    <div class="detail-list">${items}</div>
    <p class="body small" style="margin-top:10px">Key nutrients: ${g.nutrients}</p>`;
  requestAnimationFrame(placeSeg);
}
function renderFood() {
  const p = viewPhase || M.phase, g = GUIDES[p];
  $("#chipsFood").innerHTML = chips(p, "food");
  const hero = $("#foodHero"); setPhaseVars(hero, p);
  hero.innerHTML = `<div class="badge">${EMOJI[p]} ${LABEL[p]}${p === M.phase ? " · now" : ""}</div><div class="h2">Nourish your ${LABEL[p].toLowerCase()} phase</div><p class="body">${g.nutrients}</p>`;
  const meals = $("#meals"); setPhaseVars(meals, p);
  meals.innerHTML = g.meals.map(([e, t, d]) => `<div class="card meal"><div class="em">${e}</div><div><div class="tt">${t}</div><p class="body">${d}</p></div></div>`).join("");
  $("#shopping").innerHTML = `<div class="h3">🛒 Shopping-friendly ideas</div>${li(g.eat, "🛒")}`;
}
function renderYou() {
  const latest = state.history[state.history.length - 1];
  $("#inStart").value = latest;
  const avg = averageLen();
  $("#inLength").value = (avg && state.useAvg) ? M.L : state.length;
  const wrap = $("#avgToggleWrap");
  $("#inUseAvg").checked = !!(avg && state.useAvg);
  wrap.classList.toggle("disabled", !avg);
  $("#avgLabel").textContent = avg ? `Use my average (${avg.toFixed(1)} days${clampLen(avg) !== Math.round(avg) ? ", kept within 21–40" : ""})` : "Use my average (log 2 periods first)";
  $("#inLength").disabled = !!(avg && state.useAvg);
  $("#stats").innerHTML = `<div class="stat"><div class="n">${M.L}</div><div class="t">day cycle in use</div></div>
    <div class="stat"><div class="n">${avg ? avg.toFixed(1) : "–"}</div><div class="t">average from ${gaps().length} cycle${gaps().length === 1 ? "" : "s"}</div></div>`;
  const h = state.history.slice().reverse();
  $("#history").innerHTML = h.map((d, i) => {
    const prev = h[i + 1]; const gap = prev ? diffDays(parseYmd(d), parseYmd(prev)) : null;
    return `<li><span>💧 ${fLong(parseYmd(d))}${gap ? `<span class="gap">${gap} days</span>` : ""}</span>${state.history.length > 1 ? `<button type="button" class="del" data-del="${d}">Remove</button>` : ""}</li>`;
  }).join("");
}
function animateFills() {
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.querySelectorAll(".view.active .fill").forEach((f) => (f.style.width = f.dataset.w + "%"));
    document.querySelectorAll(".view.active .ring-arc").forEach((a) => a.setAttribute("stroke-dashoffset", a.dataset.off));
  }));
}
function renderAll() {
  M = model(); setTheme(); renderHeader(); renderHome(); renderPhases(); renderFood(); renderYou(); animateFills();
}

/* ---------- Navigation ---------- */
function placeIndicator() {
  const btn = document.querySelector(`.tabbar button[data-nav="${nav}"]`), bar = $("#tabbar"), ind = $("#tabIndicator");
  const b = btn.getBoundingClientRect(), p = bar.getBoundingClientRect();
  ind.style.left = b.left - p.left + 4 + "px"; ind.style.width = b.width - 8 + "px";
}
function placeSeg() {
  const segs = $("#segs"); if (!segs) return;
  const on = segs.querySelector("button.on"), ind = segs.querySelector(".seg-ind");
  if (on) { ind.style.left = on.offsetLeft + "px"; ind.style.width = on.offsetWidth + "px"; }
}
function go(to, opts = {}) {
  if (!NAVS.includes(to)) to = "home";
  const fromIdx = NAVS.indexOf(nav), toIdx = NAVS.indexOf(to);
  if (to === nav && !opts.force) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  nav = to;
  document.querySelectorAll(".view").forEach((v) => {
    const on = v.dataset.view === to;
    v.classList.remove("active", "from-left");
    if (on) { void v.offsetWidth; v.classList.add("active"); if (toIdx < fromIdx) v.classList.add("from-left"); }
  });
  document.querySelectorAll(".tabbar button").forEach((b) => b.classList.toggle("active", b.dataset.nav === to));
  placeIndicator();
  window.scrollTo(0, 0);
  if (!opts.noHash) history.replaceState(null, "", "#" + to);
  if (to === "phases") requestAnimationFrame(placeSeg);
  animateFills();
}

/* ---------- Actions ---------- */
let toastT;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2400); }
function logToday() {
  const t = ymd(new Date());
  const latest = state.history[state.history.length - 1];
  if (state.history.includes(t)) { toast("Today is already logged 💗"); return; }
  if (diffDays(new Date(), parseYmd(latest)) < 10 && !confirm(`Your last period started ${fShort(parseYmd(latest))}. Log a new one today anyway?`)) return;
  state.history.push(t); state.history.sort(); state.history = state.history.slice(-24);
  save(); renderAll(); toast("Logged. Day 1, be gentle with yourself 💧");
  if (navigator.vibrate) navigator.vibrate(15);
}

document.addEventListener("click", (e) => {
  const navBtn = e.target.closest("[data-nav]");
  if (navBtn) { go(navBtn.dataset.nav); return; }
  const ph = e.target.closest("[data-phase]");
  if (ph) {
    viewPhase = ph.dataset.phase;
    const target = ph.dataset.target || (nav === "food" ? "food" : "phases");
    renderPhases(); renderFood();
    if (nav !== target) go(target); else animateFills();
    return;
  }
  const tab = e.target.closest("[data-tab]");
  if (tab) { detailTab = tab.dataset.tab; const y = window.scrollY; renderPhases(); window.scrollTo(0, y); animateFills(); return; }
  const step = e.target.closest("[data-step]");
  if (step) { const i = $("#inLength"); if (!i.disabled) i.value = clampLen(Number(i.value || 28) + Number(step.dataset.step)); return; }
  const del = e.target.closest("[data-del]");
  if (del) {
    if (state.history.length <= 1) return;
    if (!confirm(`Remove ${fLong(parseYmd(del.dataset.del))} from your log?`)) return;
    state.history = state.history.filter((d) => d !== del.dataset.del); save(); renderAll(); toast("Removed"); return;
  }
});
$("#logBtnHome").addEventListener("click", logToday);
$("#logBtnYou").addEventListener("click", logToday);
$("#inUseAvg").addEventListener("change", (e) => { state.useAvg = e.target.checked; save(); renderAll(); });
$("#settingsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = $("#formMsg");
  const s = $("#inStart").value, n = Number($("#inLength").value);
  if (!isYmd(s)) { msg.textContent = "Please pick a valid date."; return; }
  if (diffDays(parseYmd(s), new Date()) > 0) { msg.textContent = "That date is in the future."; return; }
  if (!$("#inLength").disabled && (!(n >= 21 && n <= 40))) { msg.textContent = "Use a length between 21 and 40 days."; return; }
  // Editing the start corrects the latest logged period.
  const h = state.history.slice(0, -1).filter((d) => d < s);
  h.push(s); state.history = h;
  if (!$("#inLength").disabled) state.length = clampLen(n);
  save(); renderAll(); msg.textContent = ""; toast("Saved ✨");
});
$("#resetBtn").addEventListener("click", () => {
  if (!confirm("Reset to the default dates and clear your period log on this phone?")) return;
  state = JSON.parse(JSON.stringify(DEFAULTS)); save(); renderAll(); toast("Reset to defaults");
});

/* Swipe between tabs */
let sx = null, sy = null;
document.addEventListener("touchstart", (e) => { if (e.target.closest("input,.scroll-x,.wheel")) { sx = null; return; } sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
document.addEventListener("touchend", (e) => {
  if (sx == null) return;
  const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; sx = null;
  if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.8) {
    const i = NAVS.indexOf(nav) + (dx < 0 ? 1 : -1);
    if (i >= 0 && i < NAVS.length) go(NAVS[i]);
  }
}, { passive: true });

window.addEventListener("resize", () => { placeIndicator(); placeSeg(); });
document.addEventListener("visibilitychange", () => { if (!document.hidden && ymd(M.today) !== ymd(new Date())) renderAll(); });

/* ---------- Boot ---------- */
renderAll();
go((location.hash || "#home").slice(1), { force: true, noHash: true });
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
