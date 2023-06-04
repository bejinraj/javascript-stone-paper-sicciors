let icons = ["👊", "🖐", "✌"];

const rules = document.getElementById("rules");
const welcomePage = document.getElementById("welcome-page");
const gamePage = document.getElementById("game-page");
const scorePage = document.getElementById("score-page");

const closeBtn = document.getElementById("close-btn");
const startBtn = document.getElementById("start-btn");

const stone = document.getElementById("stone");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const playerCard = document.getElementById("player");
const computerCard = document.getElementById("computer");

const userName = document.getElementById("input-name");
const count = document.getElementById("input-count");
const gameName = document.getElementById("us-name");

let playerPoint = document.getElementById("us-point");
let computerPoint = document.getElementById("com-point");

const comment = document.getElementById("commentary");

const resetBtn = document.getElementById("reset-btn");
const exitBtn = document.getElementById("exit-btn");

let playTimes = 0;

window.addEventListener("load", () => {
  welcomePage.style.display = "none";
  rules.style.display = "flex";
  gamePage.style.display = "none";
});

let render = () => {
  console.log(playTimes);
  comment.innerHtml = "";
  playerPoint.innerHTML = 0;
  computerPoint.innerHTML = 0;
  let plaPoint = 0;
  let comPoint = 0;

  let play = 0;
  stone.addEventListener("click", () => {
    if (play < playTimes) {
      playerCard.classList.add("handshaking");
      computerCard.classList.add("handshaking-comp");
      comment.classList.remove("celebrate");

      setTimeout(() => {
        playerCard.classList.remove("handshaking");
        computerCard.classList.remove("handshaking-comp");
        comment.classList.add("celebrate");

        let i = Math.floor(Math.random() * 3);
        computerCard.innerHTML = icons[i];
        playerCard.innerHTML = icons[0];

        if (i == 1) {
          plaPoint = plaPoint + 0;
          comPoint = comPoint + 1;
          comment.innerHTML = "Computer Wins!!!😝";
          play++;
        } else if (i == 2) {
          plaPoint = plaPoint + 1;
          comPoint = comPoint + 0;
          comment.innerHTML = "Player Wins!!!🥺";
          play++;
        } else if (i == 0) {
          plaPoint = plaPoint + 0;
          comPoint = comPoint + 0;
          comment.innerHTML = "Retry 😵‍💫";
        }
        playerPoint.innerHTML = `${plaPoint}`;
        computerPoint.innerHTML = `${comPoint}`;
        setTimeout(() => {
          comment.innerHTML = "";
          computerCard.innerHTML = "🤛";
          playerCard.innerHTML = "🤜";
          if (playTimes !== 0 && play === playTimes) {
            console.log("Game Over");
            comment.classList.add("celebrate");
            setTimeout(() => {
              if (plaPoint > comPoint) {
                comment.innerHTML = "Game Over - Player Wins!!!🥺";
              } else if (comPoint > plaPoint) {
                comment.innerHTML = "Game Over - Computer Wins!!!😝";
              } else if (plaPoint == comPoint) {
                comment.innerHTML = "Game Over - Draw!!!😵‍💫";
              }
              play++;
            }, 1000);
          }
        }, 1500);
      }, 2000);
    }
  });

  paper.addEventListener("click", () => {
    if (play < playTimes) {
      playerCard.classList.add("handshaking");
      computerCard.classList.add("handshaking-comp");
      comment.classList.remove("celebrate");

      setTimeout(() => {
        playerCard.classList.remove("handshaking");
        computerCard.classList.remove("handshaking-comp");
        comment.classList.add("celebrate");

        let i = Math.floor(Math.random() * 3);
        computerCard.innerHTML = icons[i];
        playerCard.innerHTML = icons[1];

        if (i == 1) {
          plaPoint = plaPoint + 0;
          comPoint = comPoint + 0;
          comment.innerHTML = "Retry 😵‍💫";
        } else if (i == 2) {
          plaPoint = plaPoint + 0;
          comPoint = comPoint + 1;
          comment.innerHTML = "Computer Wins!!!😝";
          play++;
        } else if (i == 0) {
          plaPoint = plaPoint + 1;
          comPoint = comPoint + 0;
          comment.innerHTML = "Player Wins!!!🥺";
          play++;
        }
        playerPoint.innerHTML = `${plaPoint}`;
        computerPoint.innerHTML = `${comPoint}`;
        setTimeout(() => {
          comment.innerHTML = "";
          computerCard.innerHTML = "🤛";
          playerCard.innerHTML = "🤜";
          console.log(play, playTimes);
          if (playTimes !== 0 && play === playTimes) {
            console.log("Game Over");
            comment.classList.add("celebrate");
            setTimeout(() => {
              if (plaPoint > comPoint) {
                comment.innerHTML = "Game Over - Player Wins!!!🥺";
              } else if (comPoint > plaPoint) {
                comment.innerHTML = "Game Over - Computer Wins!!!😝";
              } else if (plaPoint == comPoint) {
                comment.innerHTML = "Game Over - Draw!!!😵‍💫";
              }
              play++;
            }, 1000);
          }
        }, 1500);
      }, 2000);
    }
  });

  scissor.addEventListener("click", () => {
    if (play < playTimes) {
      playerCard.classList.add("handshaking");
      computerCard.classList.add("handshaking-comp");
      comment.classList.remove("celebrate");

      setTimeout(() => {
        playerCard.classList.remove("handshaking");
        computerCard.classList.remove("handshaking-comp");
        comment.classList.add("celebrate");

        let i = Math.floor(Math.random() * 3);
        computerCard.innerHTML = icons[i];
        playerCard.innerHTML = icons[2];

        if (i == 1) {
          plaPoint = plaPoint + 1;
          comPoint = comPoint + 0;
          comment.innerHTML = "Player Wins!!!🥺";
          play++;
        } else if (i == 2) {
          plaPoint = plaPoint + 0;
          comPoint = comPoint + 0;
          comment.innerHTML = "Retry 😵‍💫";
        } else if (i == 0) {
          plaPoint = plaPoint + 0;
          comPoint = comPoint + 1;
          comment.innerHTML = "Computer Wins!!!😝";
          play++;
        }
        playerPoint.innerHTML = `${plaPoint}`;
        computerPoint.innerHTML = `${comPoint}`;
        setTimeout(() => {
          comment.innerHTML = "";
          computerCard.innerHTML = "🤛";
          playerCard.innerHTML = "🤜";
          if (playTimes !== 0 && play === playTimes) {
            console.log("Game Over");
            comment.classList.add("celebrate");
            setTimeout(() => {
              if (plaPoint > comPoint) {
                comment.innerHTML = "Game Over - Player Wins!!!🥺";
              } else if (comPoint > plaPoint) {
                comment.innerHTML = "Game Over - Computer Wins!!!😝";
              } else if (plaPoint == comPoint) {
                comment.innerHTML = "Game Over - Draw!!!😵‍💫";
              }
              play++;
            }, 1000);
          }
        }, 1500);
        play++;
      }, 2000);
    }
  });
};
render();

closeBtn.addEventListener("click", () => {
  welcomePage.style.display = "flex";
  rules.style.display = "none";
  gamePage.style.display = "none";
});

startBtn.addEventListener("click", () => {
  if (userName.value == "" && count.value == "") {
    alert("Input field is empty");
  } else {
    gameName.innerHTML =
      userName.value.charAt(0).toUpperCase() + userName.value.slice(1);
    playTimes = parseInt(count.value);
    welcomePage.style.display = "none";
    rules.style.display = "none";
    gamePage.style.display = "flex";
  }
  render();
});

resetBtn.addEventListener("click", () => {
  playerPoint.innerHTML = 0;
  computerPoint.innerHTML = 0;
  render();
});

exitBtn.addEventListener("click", () => {
  location.reload();
});
