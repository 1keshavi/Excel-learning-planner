// ── State ──
let activeDay = 0;
let completed = {};

// ── Helpers ──
function totalSessions() {
  return days.reduce((acc, d) => acc + d.sessions.length, 0);
}

function doneCount() {
  return Object.values(completed).filter(Boolean).length;
}

// ── Stats & Progress Bar ──
function updateStats() {
  document.getElementById("completed-count").textContent = doneCount();
  document.getElementById("pct-done").textContent =
    Math.round((doneCount() / totalSessions()) * 100) + "%";

  const bar = document.getElementById("progress-bar");
  bar.innerHTML = days
    .map((d, i) => {
      const allDone = d.sessions.every((_, si) => completed[`${i}-${si}`]);
      const cls = allDone ? "done" : i === activeDay ? "active" : "";
      return `<div class="prog-seg ${cls}"></div>`;
    })
    .join("");
}

// ── Day Tabs ──
function renderTabs() {
  document.getElementById("day-tabs").innerHTML = days
    .map(
      (d, i) =>
        `<div class="day-tab ${i === activeDay ? "active" : ""}" onclick="selectDay(${i})">${d.title}</div>`
    )
    .join("");
}

// ── Day Card ──
function renderCard() {
  const d = days[activeDay];

  const sessionsHTML = d.sessions
    .map((s, si) => {
      const key = `${activeDay}-${si}`;
      const isDone = completed[key];
      const isFirst = si === 0;

      return `
        <div class="session ${isFirst ? "expanded" : ""}" id="sess-${si}">
          <div class="session-header" onclick="toggleSess(${si})">
            <div class="sess-icon ${s.icon}">${s.emoji}</div>
            <div class="sess-title">${s.title}</div>
            <div class="sess-time">${s.time}</div>
            <div class="sess-check ${isDone ? "done" : ""}">${isDone ? "✓" : ""}</div>
            <div class="chevron">▼</div>
          </div>
          <div class="session-body">
            <ul class="topics">
              ${s.topics.map((t) => `<li>${t}</li>`).join("")}
            </ul>
            <div class="practice-box">
              <div class="practice-label">Practice Task</div>
              <div class="practice-text">${s.practice}</div>
            </div>
            <button
              class="done-btn ${isDone ? "marked" : ""}"
              onclick="markDone(event, '${key}', ${si})"
            >
              ${isDone ? "✓ Done" : "○ Mark as done"}
            </button>
          </div>
        </div>
      `;
    })
    .join("");

  const totalHours = d.sessions
    .reduce((acc, s) => acc + parseFloat(s.time), 0)
    .toFixed(1);

  document.getElementById("day-card").innerHTML = `
    <div class="day-header">
      <div>
        <div class="day-title">${d.title}: ${d.name}</div>
        <div class="day-subtitle">🎯 ${d.goal}</div>
      </div>
      <span class="level-badge ${d.badge}">${d.level}</span>
    </div>

    <div class="sessions">
      ${sessionsHTML}
    </div>

    <div class="day-footer">
      <div class="day-time">
        <strong>${totalHours} hours</strong> of learning today
      </div>
      <div class="nav-btns">
        <button class="nav-btn" onclick="prevDay()" ${activeDay === 0 ? "disabled" : ""}>← Previous</button>
        <button class="nav-btn" onclick="nextDay()" ${activeDay === days.length - 1 ? "disabled" : ""}>Next →</button>
      </div>
    </div>
  `;
}

// ── Toggle Session ──
function toggleSess(si) {
  document.getElementById(`sess-${si}`).classList.toggle("expanded");
}

// ── Mark Done ──
function markDone(e, key, si) {
  e.stopPropagation();
  completed[key] = !completed[key];
  renderCard();
  updateStats();
}

// ── Select Day ──
function selectDay(i) {
  activeDay = i;
  renderTabs();
  renderCard();
  updateStats();
}

// ── Navigation ──
function nextDay() {
  if (activeDay < days.length - 1) selectDay(activeDay + 1);
}

function prevDay() {
  if (activeDay > 0) selectDay(activeDay - 1);
}

// ── Init ──
renderTabs();
renderCard();
updateStats();