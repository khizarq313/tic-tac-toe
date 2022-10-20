const body = document.querySelector("body");
const overlay1 = document.querySelector(".overlay1");
const overlay2 = document.querySelector(".overlay2");
const menuScreen = document.querySelector(".menu-screen");
const gameScreen = document.querySelector(".game-screen");
const resultScreen = document.querySelector(".result-screen");
const pauseScreen = document.querySelector(".pause-screen");
const menuBtn = document.querySelector(".menu-btn")
const singlePlayBtn = document.querySelector(".single-player-btn");
const dualPlayBtn = document.querySelector(".multi-player-btn");
const gridBoxes =document.querySelectorAll(".grid-box");
const xScore = document.querySelector(".x-score");
const tieScore = document.querySelector(".tie-score");
const oScore = document.querySelector(".o-score");
const continueBtn = document.querySelector(".continue-btn");
const restartBtn = document.querySelector(".restart-btn");
const quitMenuBtn = document.querySelector(".quit-menu-btn");
const themeBtn = document.querySelector(".theme-btn");
const quitResultBtn = document.querySelector(".quit-result-btn");
const nextRoundBtn = document.querySelector(".next-round-btn");
const resultText = document.querySelector(".result-text");
const themeScreen = document.querySelector(".theme-screen");
const theme1Btn = document.querySelector(".theme1-btn");
const theme2Btn = document.querySelector(".theme2-btn");
const theme3Btn = document.querySelector(".theme3-btn");
const theme4Btn = document.querySelector(".theme4-btn");
const buttons = document.querySelectorAll("button");
const scoreBox = document.querySelectorAll(".score-box");
const brushLogo = document.querySelector(".brush");

let xScoreTally = [];
let tieScoreTally = [];
let oScoreTally = [];
let firstPlayerPlayed = [];
let secondPlayerPlayed = [];
let randomCpuChoice = ["b1","b2","b3","b4","b5","b6","b7","b8","b9"];
let turn = "x";
let move = 1;
let mode;
let randomBox;
let gameStatus;

function forthTheme() {
  body.style.color = "var(--theme4-color)";
  body.style.background = "var(--theme4-background)";
  buttons.forEach(button=> {
    button.style.color="var(--theme4-button-color)";
    button.style.backgroundColor="var(--theme4-button-bg)";
    button.style.setProperty("--button-hover", "#ff726f");
});
scoreBox.forEach(button=> {
  button.style.color="var(--theme4-button-color)";
  button.style.backgroundColor="var(--theme4-button-bg)";
  button.style.setProperty("--button-hover", "#ff726f");
});
theme1Btn.style.color="white";
theme2Btn.style.color="white";
theme3Btn.style.color="white";
closePanel();
themeScreen.style.setProperty("--button-hover", "#ff726f");
resultScreen.style.setProperty("--button-hover", "#ff726f");
pauseScreen.style.setProperty("--button-hover", "#ff726f");
}

function thirdTheme() {
  body.style.color = "var(--theme3-color)";
  body.style.background = "var(--theme3-background)";
  buttons.forEach(button=> {
    button.style.color="var(--theme3-button-color)";
    button.style.backgroundColor="var(--theme3-button-bg)";
    button.style.setProperty("--button-hover", "#A91079");
});
scoreBox.forEach(button=> {
  button.style.color="var(--theme3-button-color)";
  button.style.backgroundColor="var(--theme3-button-bg)";
  button.style.setProperty("--button-hover", "#A91079");
});
theme4Btn.style.color="black";
closePanel();
themeScreen.style.setProperty("--button-hover", "#A91079");
resultScreen.style.setProperty("--button-hover", "#A91079");
pauseScreen.style.setProperty("--button-hover", "#A91079");
}

function secondTheme() {
  body.style.color = "var(--theme2-color)";
  body.style.background = "var(--theme2-background)";
  buttons.forEach(button=> {
    button.style.color="var(--theme2-button-color)";
    button.style.backgroundColor="var(--theme2-button-bg)";
    button.style.setProperty("--button-hover", "#00ADB5");
});
scoreBox.forEach(button=> {
  button.style.color="var(--theme2-button-color)";
  button.style.backgroundColor="var(--theme2-button-bg)";
  button.style.setProperty("--button-hover", "#00ADB5");
});
theme4Btn.style.color="black";
closePanel();
themeScreen.style.setProperty("--button-hover", "#00ADB5");
resultScreen.style.setProperty("--button-hover", "#00ADB5");
pauseScreen.style.setProperty("--button-hover", "#00ADB5");
}

function firstTheme() {
  body.style.color = "var(--color)";
  body.style.background = "var(--background)";
  buttons.forEach(button=> {
    button.style.color="var(--button-color)";
    button.style.backgroundColor="var(--button-bg)";
    button.style.setProperty("--button-hover", "#36c1be");
});
scoreBox.forEach(button=> {
  button.style.color="var(--button-color)";
  button.style.backgroundColor="var(--button-bg)";
  button.style.setProperty("--button-hover", "#36c1be");
});
theme4Btn.style.color="black";
closePanel();
themeScreen.style.setProperty("--button-hover", "#36c1be");
resultScreen.style.setProperty("--button-hover", "#36c1be");
pauseScreen.style.setProperty("--button-hover", "#36c1be");
}

function getRandomBox() {
  randomBox = randomCpuChoice[Math.floor(Math.random()*randomCpuChoice.length)].toString();
}

function scoreCheck() {
  xScore.innerHTML = `${xScoreTally.length}`;
  tieScore.innerHTML = `${tieScoreTally.length}`;
  oScore.innerHTML = `${oScoreTally.length}`;
}

function gameTieCheck() {
  overlay2.classList.remove("hidden");
  resultScreen.classList.remove("hidden");
  resultText.innerHTML=`It's A Tie!`;
  tieScoreTally.push("tie");
  scoreCheck();
};

function firstPlay(e) {
    const firstPlayerMark = document.createElement("div");
    firstPlayerMark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 320.591 320.591" style="enable-background:new 0 0 512 512" xml:space="preserve" class="x-mark"><g><g><g id="close_1_"><path d="m30.391 318.583c-7.86.457-15.59-2.156-21.56-7.288-11.774-11.844-11.774-30.973 0-42.817l257.812-257.813c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875l-259.331 259.331c-5.893 5.058-13.499 7.666-21.256 7.288z" fill="#36c1be" data-original="#000000" class=""></path><path d="m287.9 318.583c-7.966-.034-15.601-3.196-21.257-8.806l-257.813-257.814c-10.908-12.738-9.425-31.908 3.313-42.817 11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414-6.35 5.522-14.707 8.161-23.078 7.288z" fill="#36c1be" data-original="#000000" class=""></path></g></g></g></svg>`;
    e.target.append(firstPlayerMark);
    e.target.classList.remove("free-box");
    firstPlayerPlayed.push(e.target.id);
    randomCpuChoice = randomCpuChoice.filter(item =>item !== e.target.id);
    turn = "o";
    move++;
    if (firstPlayerPlayed.includes("b1")&&firstPlayerPlayed.includes("b2")&&firstPlayerPlayed.includes("b3")||
    firstPlayerPlayed.includes("b4")&&firstPlayerPlayed.includes("b5")&&firstPlayerPlayed.includes("b6")||
    firstPlayerPlayed.includes("b7")&&firstPlayerPlayed.includes("b8")&&firstPlayerPlayed.includes("b9")||
    firstPlayerPlayed.includes("b1")&&firstPlayerPlayed.includes("b4")&&firstPlayerPlayed.includes("b7")||
    firstPlayerPlayed.includes("b2")&&firstPlayerPlayed.includes("b5")&&firstPlayerPlayed.includes("b8")||
    firstPlayerPlayed.includes("b3")&&firstPlayerPlayed.includes("b6")&&firstPlayerPlayed.includes("b9")||
    firstPlayerPlayed.includes("b1")&&firstPlayerPlayed.includes("b5")&&firstPlayerPlayed.includes("b9")||
    firstPlayerPlayed.includes("b3")&&firstPlayerPlayed.includes("b5")&&firstPlayerPlayed.includes("b7")) {
    resultPanel("p1");
    gameStatus = "over";
} else { if (move === 6) {gameTieCheck()};
};
}

function SecondPlay(e) {
  const secondPlayerMark = document.createElement("div");
  secondPlayerMark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class="o-mark"><g><g><path d="m256 512c-68.38 0-132.667-26.629-181.02-74.98-48.351-48.353-74.98-112.64-74.98-181.02s26.629-132.667 74.98-181.02c48.353-48.351 112.64-74.98 181.02-74.98s132.667 26.629 181.02 74.98c48.351 48.353 74.98 112.64 74.98 181.02s-26.629 132.667-74.98 181.02c-48.353 48.351-112.64 74.98-181.02 74.98zm0-422c-91.532 0-166 74.467-166 166s74.468 166 166 166 166-74.467 166-166-74.468-166-166-166z" fill="#eaaf3d" data-original="#000000" class=""></path></g></g></svg>`;
  e.target.append(secondPlayerMark);
  e.target.classList.remove("free-box");
  secondPlayerPlayed.push(e.target.id);
  randomCpuChoice = randomCpuChoice.filter(item =>item !== e.target.id);
  turn = "x";
  if (secondPlayerPlayed.includes("b1")&&secondPlayerPlayed.includes("b2")&&secondPlayerPlayed.includes("b3")||
  secondPlayerPlayed.includes("b4")&&secondPlayerPlayed.includes("b5")&&secondPlayerPlayed.includes("b6")||
  secondPlayerPlayed.includes("b7")&&secondPlayerPlayed.includes("b8")&&secondPlayerPlayed.includes("b9")||
  secondPlayerPlayed.includes("b1")&&secondPlayerPlayed.includes("b4")&&secondPlayerPlayed.includes("b7")||
  secondPlayerPlayed.includes("b2")&&secondPlayerPlayed.includes("b5")&&secondPlayerPlayed.includes("b8")||
  secondPlayerPlayed.includes("b3")&&secondPlayerPlayed.includes("b6")&&secondPlayerPlayed.includes("b9")||
  secondPlayerPlayed.includes("b1")&&secondPlayerPlayed.includes("b5")&&secondPlayerPlayed.includes("b9")||
  secondPlayerPlayed.includes("b3")&&secondPlayerPlayed.includes("b5")&&secondPlayerPlayed.includes("b7")) {
  resultPanel("p2");
  return;
}
}

function cpuPlay() {
  const secondPlayerMark = document.createElement("div");
    secondPlayerMark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class="o-mark"><g><g><path d="m256 512c-68.38 0-132.667-26.629-181.02-74.98-48.351-48.353-74.98-112.64-74.98-181.02s26.629-132.667 74.98-181.02c48.353-48.351 112.64-74.98 181.02-74.98s132.667 26.629 181.02 74.98c48.351 48.353 74.98 112.64 74.98 181.02s-26.629 132.667-74.98 181.02c-48.353 48.351-112.64 74.98-181.02 74.98zm0-422c-91.532 0-166 74.467-166 166s74.468 166 166 166 166-74.467 166-166-74.468-166-166-166z" fill="#eaaf3d" data-original="#000000" class=""></path></g></g></svg>`;
    if (gameStatus !== "over") {
      switch (move) {
        case 2:
          getRandomBox();
          const cpuBox = document.getElementById(randomBox);
          cpuBox.append(secondPlayerMark);
          randomCpuChoice = randomCpuChoice.filter(item =>item !== randomBox);
          secondPlayerPlayed.push(randomBox);
          cpuBox.classList.remove("free-box");
          break;
          case 3:
            getRandomBox();
            const cpuBox2 = document.getElementById(randomBox);
            cpuBox2.append(secondPlayerMark);
            randomCpuChoice = randomCpuChoice.filter(item =>item !== randomBox);
            secondPlayerPlayed.push(randomBox);
            cpuBox2.classList.remove("free-box");
            break;
            case 4:
              getRandomBox();
              const cpuBox3 = document.getElementById(randomBox);
              cpuBox3.append(secondPlayerMark);
              randomCpuChoice = randomCpuChoice.filter(item =>item !== randomBox);
              secondPlayerPlayed.push(randomBox);
              cpuBox3.classList.remove("free-box");
              break;
              case 5:
                getRandomBox();
                const cpuBox4 = document.getElementById(randomBox);
                cpuBox4.append(secondPlayerMark);
                randomCpuChoice = randomCpuChoice.filter(item =>item !== randomBox);
                secondPlayerPlayed.push(randomBox);
                cpuBox4.classList.remove("free-box");
                break;
        default:
          break;
      }
    }
    if (secondPlayerPlayed.includes("b1")&&secondPlayerPlayed.includes("b2")&&secondPlayerPlayed.includes("b3")||
    secondPlayerPlayed.includes("b4")&&secondPlayerPlayed.includes("b5")&&secondPlayerPlayed.includes("b6")||
    secondPlayerPlayed.includes("b7")&&secondPlayerPlayed.includes("b8")&&secondPlayerPlayed.includes("b9")||
    secondPlayerPlayed.includes("b1")&&secondPlayerPlayed.includes("b4")&&secondPlayerPlayed.includes("b7")||
    secondPlayerPlayed.includes("b2")&&secondPlayerPlayed.includes("b5")&&secondPlayerPlayed.includes("b8")||
    secondPlayerPlayed.includes("b3")&&secondPlayerPlayed.includes("b6")&&secondPlayerPlayed.includes("b9")||
    secondPlayerPlayed.includes("b1")&&secondPlayerPlayed.includes("b5")&&secondPlayerPlayed.includes("b9")||
    secondPlayerPlayed.includes("b3")&&secondPlayerPlayed.includes("b5")&&secondPlayerPlayed.includes("b7")) {
    resultPanel("cpu");
    return;
    }
}

function singlePlayHandler() {
  scoreCheck();
  mode = "singlePlayerMode";
  gameScreen.classList.remove("hidden");
  menuScreen.classList.add("hidden");
}

function dualPlayHandler() {
  scoreCheck();
  mode = "dualPlayerMode";
  gameScreen.classList.remove("hidden");
  menuScreen.classList.add("hidden");
}

function playHandler(e) {
  if (e.target.classList.contains("free-box")) {
    switch (mode) {
      case "singlePlayerMode":
        firstPlay(e);quitGame
        cpuPlay();
        break;
      case "dualPlayerMode":
        if (turn === "x") {
          firstPlay(e);
        } else if (turn === "o") {
          SecondPlay(e);
        }
        break;
      default:
        break;
    }
  }
}

function pausePanel() {
  pauseScreen.classList.remove("hidden");
  overlay1.classList.remove("hidden");
}

function resultPanel(winner) {
  overlay2.classList.remove("hidden");
  resultScreen.classList.remove("hidden");
  if (winner === "p1") {
    xScoreTally.push("won");
    if (mode === "singlePlayerMode") {
      resultText.innerHTML=`Player Won!`;
    } else if (mode === "dualPlayerMode") {
      resultText.innerHTML=`Player 1 Won!`;
    }
  } else if (winner === "p2") {
    resultText.innerHTML=`Player 2 Won!`;
    oScoreTally.push("won");
  } else if (winner === "cpu") {
    resultText.innerHTML=`CPU Won!`;
    oScoreTally.push("won");
  }
  scoreCheck();
}

function closePanel() {
    pauseScreen.classList.add("hidden");
    overlay1.classList.add("hidden");
    themeScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
}


function restartGame() {
  gameStatus = "";
  closePanel();
  gridBoxes.forEach((box) => {box.textContent = ""; });
  gridBoxes.forEach((box) => {box.classList.add("free-box");});
  firstPlayerPlayed = [];
  secondPlayerPlayed = [];
  randomCpuChoice = ["b1","b2","b3","b4","b5","b6","b7","b8","b9"];
  turn = "x";
  move = 1;
}

function themePanel(){
  themeScreen.classList.remove("hidden");
  overlay1.classList.remove("hidden");
  theme1Btn.style.setProperty("--button-hover", "#36c1be");
  theme1Btn.style.color = "var(--color)";
  theme1Btn.style.background = "var(--background)";
  theme2Btn.style.setProperty("--button-hover", "#00ADB5");
  theme2Btn.style.color = "var(--theme2-color)";
  theme2Btn.style.background = "var(--theme2-background)";
  theme3Btn.style.setProperty("--button-hover", "#A91079");
  theme3Btn.style.color = "var(--theme3-color)";
  theme3Btn.style.background = "var(--theme3-background)";
  theme4Btn.style.setProperty("--button-hover", "#ff726f");
  theme4Btn.style.color = "var(--theme4-color)";
  theme4Btn.style.background = "var(--theme4-background)";
}

function quitGame() {
  restartGame();
  gameScreen.classList.add("hidden");
  menuScreen.classList.remove("hidden");
  overlay2.classList.add("hidden");
  xScoreTally=[];
  oScoreTally=[];
  tieScoreTally=[];
}

function nextRound() {
  restartGame();
  overlay2.classList.add("hidden");
}

themeBtn.addEventListener("click",themePanel);
theme1Btn.addEventListener("click",firstTheme);
theme2Btn.addEventListener("click",secondTheme);
theme3Btn.addEventListener("click",thirdTheme);
theme4Btn.addEventListener("click",forthTheme);
gridBoxes.forEach((box) => {box.addEventListener("click", playHandler); });
singlePlayBtn.addEventListener("click",singlePlayHandler);
dualPlayBtn.addEventListener("click",dualPlayHandler);
menuBtn.addEventListener("click",pausePanel);
overlay1.addEventListener("click",closePanel);
continueBtn.addEventListener("click",closePanel);
restartBtn.addEventListener("click",restartGame);
quitMenuBtn.addEventListener("click",quitGame);
nextRoundBtn.addEventListener("click",nextRound);
quitResultBtn.addEventListener("click",quitGame);