(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [
    ...scope.querySelectorAll(selector),
  ];
  const STORAGE_KEY = "junior-smart-city-player-profiles-v1";
  const TOTAL_MISSIONS = 20;
  const INITIAL_METRICS = {
    energy: 25,
    mobility: 25,
    waste: 25,
    green: 25,
    digital: 25,
  };
  const ZONES = [
    {
      id: "energy",
      title: "Energi Cerdas",
      subtitle: "Energi bersih & efisiensi",
      icon: "fa-solar-panel",
      levels: [1, 2, 3, 4],
    },
    {
      id: "mobility",
      title: "Mobilitas Cerdas",
      subtitle: "Transportasi berkelanjutan",
      icon: "fa-bus",
      levels: [5, 6, 7, 8],
    },
    {
      id: "waste",
      title: "Sampah & Sirkular",
      subtitle: "Daur ulang & pengurangan",
      icon: "fa-recycle",
      levels: [9, 10, 11, 12],
    },
    {
      id: "green",
      title: "Lingkungan Tangguh",
      subtitle: "Kota hijau & adaptif",
      icon: "fa-leaf",
      levels: [13, 14, 15, 16],
    },
    {
      id: "digital",
      title: "Data & Layanan",
      subtitle: "IoT & layanan digital",
      icon: "fa-tower-broadcast",
      levels: [17, 18, 19, 20],
    },
  ];
  const METRIC_DOM = {
    energy: ["metricEnergyValue", "metricEnergyBar"],
    mobility: ["metricMobilityValue", "metricMobilityBar"],
    waste: ["metricWasteValue", "metricWasteBar"],
    green: ["metricGreenValue", "metricGreenBar"],
    digital: ["metricDigitalValue", "metricDigitalBar"],
  };

  const dom = {
    welcomeScreen: $("#welcomeScreen"),
    appShell: $("#appShell"),
    headerActions: $("#headerActions"),
    startForm: $("#startForm"),
    playerNameInput: $("#playerNameInput"),
    playerAgeInput: $("#playerAgeInput"),
    startError: $("#startError"),
    startButtonText: $("#startButtonText"),
    headerPlayerName: $("#headerPlayerName"),
    headerGrade: $("#headerGrade"),
    headerScore: $("#headerScore"),
    welcomePlayerName: $("#welcomePlayerName"),
    switchPlayerButton: $("#switchPlayerButton"),
    themeToggle: $("#themeToggle"),
    progressRing: $("#progressRing"),
    overallProgress: $("#overallProgress"),
    completedMissionLabel: $("#completedMissionLabel"),
    dashboardScore: $("#dashboardScore"),
    cityStatus: $("#cityStatus"),
    zoneGrid: $("#zoneGrid"),
    missionMapSection: $("#missionMapSection"),
    missionWorkspace: $("#missionWorkspace"),
    backToMapButton: $("#backToMapButton"),
    missionStepLabel: $("#missionStepLabel"),
    missionVisual: $("#missionVisual"),
    missionEmoji: $("#missionEmoji"),
    missionZoneChip: $("#missionZoneChip"),
    missionVisualNumber: $("#missionVisualNumber"),
    missionDifficulty: $("#missionDifficulty"),
    missionTitle: $("#missionTitle"),
    missionStory: $("#missionStory"),
    missionQuestion: $("#missionQuestion"),
    missionHint: $("#missionHint"),
    solutionOptions: $("#solutionOptions"),
    choiceCounter: $("#choiceCounter"),
    attemptCount: $("#attemptCount"),
    attemptDots: $(".attempt-dots"),
    applySolutionButton: $("#applySolutionButton"),
    answerFeedback: $("#answerFeedback"),
    missionProgressText: $("#missionProgressText"),
    missionProgressBar: $("#missionProgressBar"),
    missionProgressPercent: $("#missionProgressPercent"),
    completionModal: $("#completionModal"),
    completionTitle: $("#completionTitle"),
    completionDescription: $("#completionDescription"),
    resultStars: $("#resultStars"),
    earnedPoints: $("#earnedPoints"),
    completionAttempts: $("#completionAttempts"),
    completionTotal: $("#completionTotal"),
    nextMissionButton: $("#nextMissionButton"),
    resultMapButton: $("#resultMapButton"),
    penaltyModal: $("#penaltyModal"),
    penaltyBefore: $("#penaltyBefore"),
    penaltyDeduction: $("#penaltyDeduction"),
    penaltyAfter: $("#penaltyAfter"),
    closePenaltyButton: $("#closePenaltyButton"),
    toast: $("#toast"),
    toastMessage: $("#toastMessage"),
    currentYear: $("#currentYear"),
  };

  const state = {
    store: { activeProfileKey: null, profiles: {} },
    profileKey: null,
    profile: null,
    selectedMissionId: null,
    selectedOptionIndex: null,
    toastTimer: null,
    penaltyReturnFocus: null,
  };

  function safeParseStore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { activeProfileKey: null, profiles: {} };
      const parsed = JSON.parse(raw);
      if (
        !parsed ||
        typeof parsed !== "object" ||
        !parsed.profiles ||
        typeof parsed.profiles !== "object"
      ) {
        return { activeProfileKey: null, profiles: {} };
      }
      return {
        activeProfileKey: parsed.activeProfileKey || null,
        profiles: parsed.profiles,
      };
    } catch (error) {
      console.warn("Profil tidak dapat dibaca.", error);
      return { activeProfileKey: null, profiles: {} };
    }
  }

  function writeStore() {
    try {
      if (state.profile && state.profileKey) {
        state.store.profiles[state.profileKey] = state.profile;
        state.store.activeProfileKey = state.profileKey;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.store));
    } catch (error) {
      console.warn("Progres belum dapat disimpan.", error);
      showToast(
        "Penyimpanan browser tidak tersedia. Progres mungkin tidak tersimpan.",
        "warning",
      );
    }
  }

  function normalizeName(name) {
    return String(name || "")
      .trim()
      .replace(/\s+/g, " ");
  }

  function makeProfileKey(name, age) {
    return `${normalizeName(name).toLocaleLowerCase("id-ID")}::${age}`;
  }

  function gradeLabel(age) {
    if (age === 13) return "SMP · KELAS VII";
    if (age === 14) return "SMP · KELAS VIII";
    return "SMP · KELAS IX";
  }

  function createProfile(name, age) {
    return {
      name,
      age,
      grade: gradeLabel(age),
      score: 0,
      penaltyPoints: 0,
      unlockedLevel: 1,
      currentLevel: 1,
      completedLevels: {},
      attempts: {},
      failureRun: {},
      metrics: { ...INITIAL_METRICS },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }

  function normalizeProfile(profile, name, age) {
    const safe =
      profile && typeof profile === "object"
        ? profile
        : createProfile(name, age);
    safe.name = name;
    safe.age = age;
    safe.grade = gradeLabel(age);
    safe.score = Math.max(0, Number(safe.score) || 0);
    safe.penaltyPoints = Math.max(0, Number(safe.penaltyPoints) || 0);
    safe.unlockedLevel = Math.min(
      TOTAL_MISSIONS,
      Math.max(1, Number(safe.unlockedLevel) || 1),
    );
    safe.currentLevel = Math.min(
      safe.unlockedLevel,
      Math.max(1, Number(safe.currentLevel) || 1),
    );
    safe.completedLevels =
      safe.completedLevels && typeof safe.completedLevels === "object"
        ? safe.completedLevels
        : {};
    safe.attempts =
      safe.attempts && typeof safe.attempts === "object" ? safe.attempts : {};
    safe.failureRun =
      safe.failureRun && typeof safe.failureRun === "object"
        ? safe.failureRun
        : {};
    safe.metrics = { ...INITIAL_METRICS, ...(safe.metrics || {}) };
    Object.keys(safe.metrics).forEach((key) => {
      safe.metrics[key] = Math.max(
        0,
        Math.min(100, Number(safe.metrics[key]) || 0),
      );
    });
    return safe;
  }

  function setTheme(theme) {
    const next = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("junior-smart-city-theme", next);
    } catch (_) {
      /* tema tetap diterapkan untuk sesi ini */
    }
    dom.themeToggle.innerHTML =
      next === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    dom.themeToggle.setAttribute(
      "aria-label",
      next === "dark" ? "Aktifkan tema terang" : "Aktifkan tema gelap",
    );
  }

  function initializeTheme() {
    let saved = "light";
    try {
      saved = localStorage.getItem("junior-smart-city-theme") || "light";
    } catch (_) {
      /* ignore */
    }
    setTheme(saved);
  }

  function updateHeader() {
    if (!state.profile) return;
    dom.headerPlayerName.textContent = state.profile.name;
    dom.headerGrade.textContent = state.profile.grade.replace("SMP · ", "");
    dom.headerScore.textContent = state.profile.score.toLocaleString("id-ID");
    dom.dashboardScore.textContent = `${state.profile.score.toLocaleString("id-ID")} PTS`;
    dom.welcomePlayerName.textContent = firstName(state.profile.name);
  }

  function firstName(name) {
    return normalizeName(name).split(" ")[0] || "Planner";
  }

  function getCompletedCount() {
    return Object.keys(state.profile?.completedLevels || {}).length;
  }

  function updateProgress() {
    if (!state.profile) return;
    const completed = getCompletedCount();
    const percentage = Math.round((completed / TOTAL_MISSIONS) * 100);
    dom.overallProgress.textContent = `${percentage}%`;
    dom.progressRing.style.setProperty("--progress", `${percentage}%`);
    dom.completedMissionLabel.textContent = `${completed} / ${TOTAL_MISSIONS} Misi`;
    dom.missionProgressText.textContent = `${completed} dari ${TOTAL_MISSIONS} misi selesai`;
    dom.missionProgressBar.style.width = `${percentage}%`;
    dom.missionProgressPercent.textContent = `${percentage}%`;

    const metrics = Object.values(state.profile.metrics);
    const average =
      metrics.reduce((sum, value) => sum + value, 0) / metrics.length;
    if (average >= 70) {
      dom.cityStatus.className = "city-status is-good";
      dom.cityStatus.innerHTML =
        '<i class="fa-solid fa-circle-check"></i> CITY IS THRIVING';
    } else if (average >= 45) {
      dom.cityStatus.className = "city-status";
      dom.cityStatus.innerHTML =
        '<i class="fa-solid fa-arrow-trend-up"></i> CITY IS IMPROVING';
    } else {
      dom.cityStatus.className = "city-status";
      dom.cityStatus.innerHTML =
        '<i class="fa-solid fa-signal"></i> NEEDS IMPROVEMENT';
    }

    Object.entries(METRIC_DOM).forEach(([key, ids]) => {
      const value = Math.round(state.profile.metrics[key]);
      document.getElementById(ids[0]).textContent = `${value}%`;
      document.getElementById(ids[1]).style.width = `${value}%`;
    });
  }

  function renderMap() {
    if (!state.profile) return;
    const unlocked = state.profile.unlockedLevel;
    const completed = state.profile.completedLevels;
    dom.zoneGrid.innerHTML = ZONES.map((zone) => {
      const levels = zone.levels
        .map((level) => {
          const isLocked = level > unlocked;
          const isComplete = Boolean(completed[String(level)]);
          const isCurrent = level === state.profile.currentLevel && !isComplete;
          const label = isLocked
            ? '<i class="fa-solid fa-lock" aria-hidden="true"></i>'
            : isComplete
              ? '<i class="fa-solid fa-check" aria-hidden="true"></i>'
              : String(level).padStart(2, "0");
          const classes = ["level-button"];
          if (isComplete) classes.push("is-completed");
          if (isCurrent) classes.push("is-current");
          return `<button class="${classes.join(" ")}" type="button" data-level="${level}" ${isLocked ? "disabled" : ""} aria-label="Misi ${level}${isLocked ? ", terkunci" : isComplete ? ", selesai" : ", terbuka"}">${label}</button>`;
        })
        .join("");
      const zoneClass = `zone-${zone.id}`;
      const zoneCompleted = zone.levels.filter(
        (level) => completed[String(level)],
      ).length;
      return `<article class="zone-card ${zoneClass}"><div class="zone-card-top"><span class="zone-icon"><i class="fa-solid ${zone.icon}" aria-hidden="true"></i></span><div><h4>${zone.title}</h4><small>${zoneCompleted}/4 selesai · ${zone.subtitle}</small></div></div><div class="zone-levels">${levels}</div></article>`;
    }).join("");
  }

  function showMissionMap(shouldScroll = false) {
    state.selectedMissionId = null;
    state.selectedOptionIndex = null;
    dom.missionWorkspace.hidden = true;
    dom.missionMapSection.hidden = false;
    if (shouldScroll)
      dom.missionMapSection.scrollIntoView({
        behavior: reducedMotion() ? "auto" : "smooth",
        block: "start",
      });
  }

  function openMission(id) {
    const mission = window.SMART_CITY_MISSIONS.find((item) => item.id === id);
    if (!mission || id > state.profile.unlockedLevel) return;
    state.selectedMissionId = id;
    state.selectedOptionIndex = null;
    state.profile.currentLevel = id;
    state.profile.updatedAt = new Date().toISOString();
    writeStore();

    dom.missionMapSection.hidden = true;
    dom.missionWorkspace.hidden = false;
    dom.missionStepLabel.textContent = `MISSION ${String(id).padStart(2, "0")} / ${TOTAL_MISSIONS}`;
    dom.missionEmoji.textContent = mission.emoji;
    dom.missionZoneChip.textContent = mission.zoneName.toUpperCase();
    dom.missionVisualNumber.textContent = String(id).padStart(2, "0");
    dom.missionDifficulty.textContent = mission.difficulty;
    dom.missionTitle.textContent = mission.title;
    dom.missionStory.textContent = mission.story;
    dom.missionQuestion.textContent = mission.question;
    dom.missionHint.textContent = mission.hint;
    dom.choiceCounter.textContent = "0 / 1";
    dom.answerFeedback.hidden = true;
    dom.answerFeedback.className = "answer-feedback";
    renderOptions(mission);
    updateAttemptIndicator();
    updateProgress();
    setTimeout(
      () =>
        dom.missionWorkspace.scrollIntoView({
          behavior: reducedMotion() ? "auto" : "smooth",
          block: "start",
        }),
      40,
    );
  }

  function renderOptions(mission) {
    dom.solutionOptions.innerHTML = mission.options
      .map((option, index) => {
        const letter = String.fromCharCode(65 + index);
        return `<button class="solution-option" type="button" data-option-index="${index}" aria-pressed="false"><span class="option-letter">${letter}</span><span class="option-copy"><strong>${escapeHTML(option.title)}</strong><small>${escapeHTML(option.desc)}</small></span><i class="fa-solid fa-circle-check option-check" aria-hidden="true"></i></button>`;
      })
      .join("");
    dom.applySolutionButton.disabled = true;
  }

  function escapeHTML(value) {
    return String(value).replace(
      /[&<>"']/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[character],
    );
  }

  function getAttemptCount(id = state.selectedMissionId) {
    return Number(state.profile?.attempts?.[String(id)] || 0);
  }

  function getFailureRun(id = state.selectedMissionId) {
    return Number(state.profile?.failureRun?.[String(id)] || 0);
  }

  function updateAttemptIndicator() {
    const id = state.selectedMissionId;
    if (!id) return;
    const totalAttempts = getAttemptCount(id);
    const failureRun = getFailureRun(id);
    dom.attemptCount.textContent = totalAttempts;
    dom.attemptDots.innerHTML = [0, 1, 2]
      .map((index) => `<i class="${index < failureRun ? "used" : ""}"></i>`)
      .join("");
  }

  function showFeedback(type, title, message) {
    dom.answerFeedback.hidden = false;
    dom.answerFeedback.className = `answer-feedback ${type === "correct" ? "is-correct" : "is-wrong"}`;
    const icon =
      type === "correct" ? "fa-circle-check" : "fa-circle-exclamation";
    dom.answerFeedback.innerHTML = `<div class="feedback-title"><i class="fa-solid ${icon}" aria-hidden="true"></i>${escapeHTML(title)}</div><p>${escapeHTML(message)}</p>`;
  }

  function selectOption(index) {
    if (state.selectedMissionId == null) return;
    state.selectedOptionIndex = index;
    $$(".solution-option", dom.solutionOptions).forEach((button) => {
      const selected = Number(button.dataset.optionIndex) === index;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    dom.choiceCounter.textContent = "1 / 1";
    dom.applySolutionButton.disabled = false;
    dom.answerFeedback.hidden = true;
  }

  function clamp(value, min = 0, max = 100) {
    return Math.max(min, Math.min(max, value));
  }

  function submitSolution() {
    if (state.selectedMissionId == null || state.selectedOptionIndex == null)
      return;
    const mission = window.SMART_CITY_MISSIONS.find(
      (item) => item.id === state.selectedMissionId,
    );
    if (!mission) return;
    const key = String(mission.id);
    const option = mission.options[state.selectedOptionIndex];
    const attempts = getAttemptCount(mission.id) + 1;
    state.profile.attempts[key] = attempts;

    if (option.correct) {
      state.profile.failureRun[key] = 0;
      let pointsEarned = 0;
      let stars = 1;
      const alreadyCompleted = Boolean(state.profile.completedLevels[key]);
      if (!alreadyCompleted) {
        pointsEarned = Math.max(50, 140 - (attempts - 1) * 10);
        stars = attempts === 1 ? 3 : attempts === 2 ? 2 : 1;
        state.profile.score += pointsEarned;
        state.profile.completedLevels[key] = {
          points: pointsEarned,
          stars,
          attempts,
          completedAt: new Date().toISOString(),
        };
        state.profile.metrics[mission.metric] = clamp(
          state.profile.metrics[mission.metric] + mission.gain,
        );
        state.profile.unlockedLevel = Math.min(
          TOTAL_MISSIONS,
          Math.max(state.profile.unlockedLevel, mission.id + 1),
        );
        if (mission.id < TOTAL_MISSIONS)
          state.profile.currentLevel = mission.id + 1;
      } else {
        stars = state.profile.completedLevels[key].stars || 1;
      }
      state.profile.updatedAt = new Date().toISOString();
      writeStore();
      updateHeader();
      updateProgress();
      renderMap();
      showCompletion(mission, {
        pointsEarned,
        stars,
        attempts,
        alreadyCompleted,
      });
      return;
    }

    const currentFailureRun = getFailureRun(mission.id) + 1;
    state.profile.failureRun[key] = currentFailureRun;
    state.profile.updatedAt = new Date().toISOString();
    writeStore();
    updateAttemptIndicator();
    updateHeader();
    updateProgress();
    renderOptions(mission);
    state.selectedOptionIndex = null;
    dom.choiceCounter.textContent = "0 / 1";
    showFeedback(
      "wrong",
      "Belum tepat. Coba analisis lagi!",
      "Solusi tersebut belum menjawab kebutuhan kota. Perhatikan petunjuk, lalu pilih strategi yang lebih sesuai.",
    );

    if (currentFailureRun >= 3) {
      state.profile.failureRun[key] = 0;
      const before = state.profile.score;
      const deduction = Math.min(20, before);
      state.profile.score = Math.max(0, before - deduction);
      state.profile.penaltyPoints += deduction;
      writeStore();
      updateHeader();
      updateAttemptIndicator();
      showPenalty(before, deduction, state.profile.score);
    } else {
      showToast(
        `Belum tepat. Sisa kesempatan sebelum checkpoint: ${3 - currentFailureRun}.`,
        "warning",
      );
    }
  }

  function showCompletion(mission, result) {
    const { pointsEarned, stars, attempts, alreadyCompleted } = result;
    dom.completionTitle.textContent = alreadyCompleted
      ? "Misi berhasil diulang!"
      : "Kota semakin cerdas!";
    dom.completionDescription.textContent = alreadyCompleted
      ? "Kamu sudah pernah menyelesaikan misi ini. Hebat, terus asah strategi dan pemahamanmu! Skor penyelesaian tidak ditambahkan lagi."
      : mission.explanation;
    dom.resultStars.textContent = "★".repeat(stars) + "☆".repeat(3 - stars);
    dom.earnedPoints.textContent = `+${pointsEarned.toLocaleString("id-ID")}`;
    dom.completionAttempts.textContent = attempts;
    dom.completionTotal.textContent = `${getCompletedCount()} / ${TOTAL_MISSIONS}`;
    if (mission.id === TOTAL_MISSIONS) {
      dom.nextMissionButton.innerHTML =
        'Lihat Hasil Kota <i class="fa-solid fa-trophy"></i>';
    } else {
      dom.nextMissionButton.innerHTML =
        'Misi Berikutnya <i class="fa-solid fa-arrow-right"></i>';
    }
    dom.completionModal.hidden = false;
    dom.nextMissionButton.focus();
  }

  function showPenalty(before, deduction, after) {
    dom.penaltyBefore.textContent = before.toLocaleString("id-ID");
    dom.penaltyDeduction.textContent = `−${deduction.toLocaleString("id-ID")}`;
    dom.penaltyAfter.textContent = after.toLocaleString("id-ID");
    dom.penaltyModal.hidden = false;
    dom.penaltyReturnFocus = document.activeElement;
    dom.closePenaltyButton.focus();
  }

  function closePenalty() {
    dom.penaltyModal.hidden = true;
    if (
      dom.penaltyReturnFocus &&
      typeof dom.penaltyReturnFocus.focus === "function"
    )
      dom.penaltyReturnFocus.focus();
    dom.penaltyReturnFocus = null;
  }

  function goToNextMission() {
    dom.completionModal.hidden = true;
    const id = state.selectedMissionId;
    if (id && id < TOTAL_MISSIONS && id + 1 <= state.profile.unlockedLevel) {
      openMission(id + 1);
    } else {
      showMissionMap(true);
    }
  }

  function showToast(message, type = "info") {
    window.clearTimeout(state.toastTimer);
    dom.toastMessage.textContent = message;
    dom.toast.classList.remove("is-success", "is-warning", "show");
    if (type === "success") dom.toast.classList.add("is-success");
    if (type === "warning") dom.toast.classList.add("is-warning");
    requestAnimationFrame(() => dom.toast.classList.add("show"));
    state.toastTimer = window.setTimeout(
      () => dom.toast.classList.remove("show"),
      3000,
    );
  }

  function reducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function startSession(name, age) {
    const key = makeProfileKey(name, age);
    const existing = state.store.profiles[key];
    state.profileKey = key;
    state.profile = normalizeProfile(
      existing || createProfile(name, age),
      name,
      age,
    );
    state.store.profiles[key] = state.profile;
    state.store.activeProfileKey = key;
    state.selectedMissionId = null;
    state.selectedOptionIndex = null;
    writeStore();

    dom.welcomeScreen.hidden = true;
    dom.appShell.hidden = false;
    dom.headerActions.hidden = false;
    dom.missionMapSection.hidden = false;
    dom.missionWorkspace.hidden = true;
    updateHeader();
    updateProgress();
    renderMap();
    dom.appShell.scrollIntoView({
      behavior: reducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }

  function switchPlayer() {
    if (!state.profile) return;
    writeStore();
    const current = state.profile;
    state.profile = null;
    state.profileKey = null;
    state.selectedMissionId = null;
    dom.appShell.hidden = true;
    dom.headerActions.hidden = true;
    dom.welcomeScreen.hidden = false;
    dom.playerNameInput.value = current.name;
    dom.playerAgeInput.value = current.age;
    dom.startButtonText.textContent = "Masuk ke Kota";
    dom.startError.hidden = true;
    dom.welcomeScreen.scrollIntoView({
      behavior: reducedMotion() ? "auto" : "smooth",
      block: "start",
    });
    dom.playerNameInput.focus();
  }

  function validateStartForm(name, ageValue) {
    if (name.length < 2) return "Nama pemain minimal 2 karakter.";
    if (name.length > 24) return "Nama pemain maksimal 24 karakter.";
    if (!Number.isInteger(ageValue) || ageValue < 13 || ageValue > 16)
      return "Masukkan usia 13 sampai 16 tahun.";
    return "";
  }

  function initializeEvents() {
    dom.startForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = normalizeName(dom.playerNameInput.value);
      const age = Number(dom.playerAgeInput.value);
      const error = validateStartForm(name, age);
      if (error) {
        dom.startError.textContent = error;
        dom.startError.hidden = false;
        return;
      }
      dom.startError.hidden = true;
      startSession(name, age);
    });

    dom.switchPlayerButton.addEventListener("click", switchPlayer);
    dom.themeToggle.addEventListener("click", () => {
      const next =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      setTheme(next);
    });

    dom.zoneGrid.addEventListener("click", (event) => {
      const button = event.target.closest("[data-level]");
      if (!button || button.disabled) return;
      openMission(Number(button.dataset.level));
    });

    dom.solutionOptions.addEventListener("click", (event) => {
      const button = event.target.closest("[data-option-index]");
      if (!button || button.disabled) return;
      selectOption(Number(button.dataset.optionIndex));
    });

    dom.applySolutionButton.addEventListener("click", submitSolution);
    dom.backToMapButton.addEventListener("click", () => showMissionMap(true));
    dom.nextMissionButton.addEventListener("click", goToNextMission);
    dom.resultMapButton.addEventListener("click", () => {
      dom.completionModal.hidden = true;
      showMissionMap(true);
    });
    dom.closePenaltyButton.addEventListener("click", closePenalty);

    dom.completionModal.addEventListener("click", (event) => {
      if (event.target === dom.completionModal) {
        dom.completionModal.hidden = true;
        showMissionMap(false);
      }
    });
    dom.penaltyModal.addEventListener("click", (event) => {
      if (event.target === dom.penaltyModal) closePenalty();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (!dom.penaltyModal.hidden) closePenalty();
        else if (!dom.completionModal.hidden) {
          dom.completionModal.hidden = true;
          showMissionMap(false);
        }
      }
    });
  }

  function initialize() {
    state.store = safeParseStore();
    initializeTheme();
    dom.currentYear.textContent = new Date().getFullYear();
    const active = state.store.activeProfileKey
      ? state.store.profiles[state.store.activeProfileKey]
      : null;
    if (active && active.name && Number.isInteger(Number(active.age))) {
      dom.playerNameInput.value = active.name;
      dom.playerAgeInput.value = active.age;
      dom.startButtonText.textContent = "Lanjutkan sebagai Planner";
    }
    initializeEvents();
  }

  initialize();
})();
