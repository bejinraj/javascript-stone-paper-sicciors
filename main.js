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

let userName = document.getElementById("input-name");
let count = document.getElementById("input-count");
let gameName = document.getElementById("us-name");

let playerPoint = document.getElementById("us-point");
let computerPoint = document.getElementById("com-point");

const comment = document.getElementById("commentary");

const resetBtn = document.getElementById("reset-btn");
const exitBtn = document.getElementById("exit-btn");

let r = Math.floor(Math.random() * 3);

window.addEventListener("load", () => {
  welcomePage.style.display = "none";
  rules.style.display = "flex";
  gamePage.style.display = "none";
});

let render = () => {
  gameName.innerHTML = userName.value;
  comment.innerHtml = "";
  playerPoint.innerHTML = 0;
  computerPoint.innerHTML = 0;
  let plaPoint = 0;
  let comPoint = 0;

  stone.addEventListener("click", () => {
    playerCard.classList.add("handshaking");
    computerCard.classList.add("handshaking-comp");
    comment.classList.remove("celebrate");
    stone.style.display = "block";
    paper.style.display = "none";
    scissor.style.display = "none";

    setTimeout(() => {
      playerCard.classList.remove("handshaking");
      computerCard.classList.remove("handshaking-comp");
      comment.classList.add("celebrate");
      stone.style.display = "block";
      paper.style.display = "block";
      scissor.style.display = "block";

      let i = Math.floor(Math.random() * 3);
      computerCard.innerHTML = icons[i];
      playerCard.innerHTML = icons[0];

      if (i == 1) {
        plaPoint = plaPoint + 0;
        comPoint = comPoint + 1;
        comment.innerHTML = "Computer Wins!!!😝";
      } else if (i == 2) {
        plaPoint = plaPoint + 1;
        comPoint = comPoint + 0;
        comment.innerHTML = "Player Wins!!!🥺";
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
      }, 1500);
    }, 2000);
  });

  paper.addEventListener("click", () => {
    playerCard.classList.add("handshaking");
    computerCard.classList.add("handshaking-comp");
    comment.classList.remove("celebrate");
    stone.style.display = "none";
    paper.style.display = "block";
    scissor.style.display = "none";

    setTimeout(() => {
      playerCard.classList.remove("handshaking");
      computerCard.classList.remove("handshaking-comp");
      comment.classList.add("celebrate");
      stone.style.display = "block";
      paper.style.display = "block";
      scissor.style.display = "block";

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
      } else if (i == 0) {
        plaPoint = plaPoint + 1;
        comPoint = comPoint + 0;
        comment.innerHTML = "Player Wins!!!🥺";
      }
      playerPoint.innerHTML = `${plaPoint}`;
      computerPoint.innerHTML = `${comPoint}`;
      setTimeout(() => {
        comment.innerHTML = "";
        computerCard.innerHTML = "🤛";
        playerCard.innerHTML = "🤜";
      }, 1000);
    }, 2000);
  });

  scissor.addEventListener("click", () => {
    playerCard.classList.add("handshaking");
    computerCard.classList.add("handshaking-comp");
    comment.classList.remove("celebrate");
    stone.style.display = "none";
    paper.style.display = "none";
    scissor.style.display = "block";

    setTimeout(() => {
      playerCard.classList.remove("handshaking");
      computerCard.classList.remove("handshaking-comp");
      comment.classList.add("celebrate");
      stone.style.display = "block";
      paper.style.display = "block";
      scissor.style.display = "block";

      let i = Math.floor(Math.random() * 3);
      computerCard.innerHTML = icons[i];
      playerCard.innerHTML = icons[2];

      if (i == 1) {
        plaPoint = plaPoint + 1;
        comPoint = comPoint + 0;
        comment.innerHTML = "Player Wins!!!🥺";
      } else if (i == 2) {
        plaPoint = plaPoint + 0;
        comPoint = comPoint + 0;
        comment.innerHTML = "Retry 😵‍💫";
      } else if (i == 0) {
        plaPoint = plaPoint + 0;
        comPoint = comPoint + 1;
        comment.innerHTML = "Computer Wins!!!😝";
      }
      playerPoint.innerHTML = `${plaPoint}`;
      computerPoint.innerHTML = `${comPoint}`;
      setTimeout(() => {
        comment.innerHTML = "";
        computerCard.innerHTML = "🤛";
        playerCard.innerHTML = "🤜";
      }, 1000);
    }, 2000);
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
    gameName.innerHTML = userName.value;
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
