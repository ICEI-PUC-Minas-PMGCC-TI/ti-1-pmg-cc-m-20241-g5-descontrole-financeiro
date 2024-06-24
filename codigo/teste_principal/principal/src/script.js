document.addEventListener('DOMContentLoaded', function () {
  const dailyQuestContainer = document.querySelector('.quest1-contents-container');
  const weeklyQuestContainer = document.querySelector('.quest2-contents-container');
  const changeDayBtn = document.getElementById('changeDayBtn');
  const earnCoinsBtn = document.getElementById('earnCoinsBtn');
  const rightAnsBtn = document.getElementById('rightAns');
  const wrongAnsBtn = document.getElementById('wrongAns');
  const userData = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
  const consecutiveCorrectAnswers = userData ? userData.consecutive_answers : 0;
  let ansProgress = 0;
  let coinProgress = 0;
  var dailyQuest = 0;
  var weeklyQuest = 0;
  var questionRow = 0;
  var coins = 0;

  let dailyQuests, weeklyQuests;

  fetch('dbmissoes.json')
    .then(response => response.json())
    .then(data => {
      dailyQuests = data.dailyQuests;
      weeklyQuests = data.weeklyQuests;
      checkAndUpdateQuests();
      updateProgressFromSession();
    })
    .catch(error => console.error('Error loading quests:', error));

  function loadRandomQuests(id, title) {
    coins = 0;
    ansProgress = 0;
    coinProgress = 0;
    questionRow = 0;
    let randomQuest;
    if (id == 1) {
      questContainer = dailyQuestContainer;
      randomQuest = dailyQuests[Math.floor(Math.random() * dailyQuests.length)];
    } else {
      questContainer = weeklyQuestContainer;
      randomQuest = weeklyQuests[Math.floor(Math.random() * weeklyQuests.length)];
    }
    questContainer.innerHTML = '';
    questContainer.innerHTML += createQuestCard(title, randomQuest, id, false);
    return randomQuest;
  }

  function createQuestCard(title, quest, id, isCompleted) {
    if (isCompleted) {
      return `
        <div class="card">
          <div class="card-header">
            ${title}
          </div>
          <div class="card-body">
            <div class="title-holder">
              <img src="../imgs/checked.png" class="img-fluid" alt="..." id="main-img">
              <h5 class="card-title">${quest.description}</h5>
            </div>
            <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="0" aria-valuemin="0" aria-valuemax="${quest.goal}" style="height: 30px" id="questProgressStructure${id}">
              <div class="progress-bar bg-success" style="width: 100%" id="questProgressBar${id}">Completo!</div>
            </div>
          </div>
        </div>`;
    } else {
      return `
        <div class="card">
          <div class="card-header">
            ${title}
          </div>
          <div class="card-body">
            <div class="title-holder">
              <img src="${quest.img_path}" class="img-fluid" alt="..." id="main-img">
              <h5 class="card-title">${quest.description}</h5>
            </div>
            <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="0" aria-valuemin="0" aria-valuemax="${quest.goal}" style="height: 30px" id="questProgressStructure${id}">
              <div class="progress-bar bg-danger" style="width: 0%" id="questProgressBar${id}">0/${quest.goal}</div>
            </div>
          </div>
        </div>`;
    }
  }

  function checkCompletion(score, quest, id, title) {
    const goal = quest.goal;
    if (id == 1) {
      questContainer = dailyQuestContainer;
    } else {
      questContainer = weeklyQuestContainer;
    }
    if (score >= goal) {
      questContainer.innerHTML = createQuestCard(title, quest, id, true);
    }
  }

  changeDayBtn.addEventListener('click', function () {
    dailyQuest = loadRandomQuests(1, "Missão Diária :");
    weeklyQuest = loadRandomQuests(2, "Missão Semanal :");
    setNextUpdateTime();
    saveCurrentQuests();
  });

  earnCoinsBtn.addEventListener("click", function () {
    coins += 50;
    const questProgress = document.getElementById('questProgressBar1');
    const questGoal = document.getElementById("questProgressStructure1").getAttribute("aria-valuemax");
    coinProgress += (50 / questGoal) * 100;
    questProgress.style.width = `${coinProgress}%`;
    if (coinProgress <= 100) {
      questProgress.innerHTML = `${Math.trunc(((coinProgress * questGoal) / 100))}/${questGoal}`;
    }
    checkCompletion(coins, dailyQuest, 1, "Missão Diária :");
  });

  rightAnsBtn.addEventListener('click', function () {
    progressJson = weeklyQuest.progress;
    progressJson += 1;
    questionRow += 1;
    const goalJson = weeklyQuest.goal;
    const questProgress = document.getElementById('questProgressBar2');
    ansProgress += (1 / goalJson) * 100;
    questProgress.style.width = `${ansProgress}%`;
    if (ansProgress <= 100) {
      questProgress.innerHTML = `${questionRow}/${goalJson}`;
    }
    checkCompletion(questionRow, weeklyQuest, 2, "Missão Semanal :");
  });

  wrongAnsBtn.addEventListener('click', function () {
    const questProgress = document.getElementById('questProgressBar2');
    ansProgress = 0;
    questionRow = 0;
    questProgress.style.width = 0;
    questProgress.innerHTML = `0/${weeklyQuest.goal}`;
  });

  function updateProgressFromSession() {
    if (weeklyQuest) {
      const questProgress = document.getElementById('questProgressBar2');
      const questGoal = weeklyQuest.goal;
      ansProgress = (consecutiveCorrectAnswers / questGoal) * 100;
      questProgress.style.width = `${ansProgress}%`;
      if (ansProgress <= 100) {
        questProgress.innerHTML = `${consecutiveCorrectAnswers}/${questGoal}`;
      }
      checkCompletion(consecutiveCorrectAnswers, weeklyQuest, 2, "Missão Semanal :");
    }
  }

  function checkAndUpdateQuests() {
    const now = new Date();
    const nextDailyUpdate = new Date(localStorage.getItem('nextDailyUpdate') || 0);
    const nextWeeklyUpdate = new Date(localStorage.getItem('nextWeeklyUpdate') || 0);

    if (!localStorage.getItem('currentDailyQuest') || now >= nextDailyUpdate) {
      dailyQuest = loadRandomQuests(1, "Missão Diária :");
      localStorage.setItem('nextDailyUpdate', getNextDailyUpdateTime().toISOString());
      localStorage.setItem('currentDailyQuest', JSON.stringify(dailyQuest));
    } else {
      dailyQuest = JSON.parse(localStorage.getItem('currentDailyQuest'));
      dailyQuestContainer.innerHTML = createQuestCard("Missão Diária :", dailyQuest, 1, false);
    }

    if (!localStorage.getItem('currentWeeklyQuest') || now >= nextWeeklyUpdate) {
      weeklyQuest = loadRandomQuests(2, "Missão Semanal :");
      localStorage.setItem('nextWeeklyUpdate', getNextWeeklyUpdateTime().toISOString());
      localStorage.setItem('currentWeeklyQuest', JSON.stringify(weeklyQuest));
    } else {
      weeklyQuest = JSON.parse(localStorage.getItem('currentWeeklyQuest'));
      weeklyQuestContainer.innerHTML = createQuestCard("Missão Semanal :", weeklyQuest, 2, false);
    }
  }

  function getNextDailyUpdateTime() {
    const now = new Date();
    const nextUpdate = new Date(now);
    nextUpdate.setHours(24, 0, 0, 0); // Next midnight
    return nextUpdate;
  }

  function getNextWeeklyUpdateTime() {
    const now = new Date();
    const nextUpdate = new Date(now);
    nextUpdate.setDate(now.getDate() + ((7 - now.getDay()) % 7)); // Next Monday
    nextUpdate.setHours(24, 0, 0, 0); // Next midnight
    return nextUpdate;
  }

  function setNextUpdateTime() {
    if (!localStorage.getItem('nextDailyUpdate')) {
      localStorage.setItem('nextDailyUpdate', getNextDailyUpdateTime().toISOString());
    }
    if (!localStorage.getItem('nextWeeklyUpdate')) {
      localStorage.setItem('nextWeeklyUpdate', getNextWeeklyUpdateTime().toISOString());
    }
  }

  function saveCurrentQuests() {
    localStorage.setItem('currentDailyQuest', JSON.stringify(dailyQuest));
    localStorage.setItem('currentWeeklyQuest', JSON.stringify(weeklyQuest));
  }

  setNextUpdateTime(); // Initialize the next update times
});
