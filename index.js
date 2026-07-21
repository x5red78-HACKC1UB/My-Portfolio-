const codingButton = document.getElementById("codeprojects");
const abtme = document.getElementById("abtme");
const email = document.getElementById("email");
const artgallery = document.getElementById("art");
const moneyclickerrepo = document.getElementById("githubrepomoney");
const moneyclickeractualdemo = document.getElementById("actualwebmoney");
const passwordrepo = document.getElementById("githubrepopassword");
const passwordemo = document.getElementById("actualwebpassword");
const lightdark = document.getElementById("light-dark");
const back = document.getElementById("back");
const intro = document.getElementById("greetings");


const calcrepo = document.getElementById("githubrepocalc");
const calcdemo = document.getElementById("actualwebcalc");

const calcrepo2 = document.getElementById("githubrepocalc2");
const calcdemo2 = document.getElementById("actualwebcalc2");






if (moneyclickerrepo) {
  moneyclickerrepo.addEventListener("click", () => {
    window.location.href = "https://github.com/x5red78-HACKC1UB/money-cliker"
  });
};
if (moneyclickeractualdemo) {

  moneyclickeractualdemo.addEventListener("click", () => {
    window.location.href = "https://x5red78-hackc1ub.github.io/money-cliker/"
  });

}

if (passwordrepo) {
  passwordrepo.addEventListener("click", () => {
    window.location.href = "https://github.com/x5red78-HACKC1UB/password-generator"
  });
};
if (passwordemo) {
  passwordemo.addEventListener("click", () => {
    window.location.href = "https://x5red78-hackc1ub.github.io/password-generator/"
  });
};
if (calcrepo) {
  calcrepo.addEventListener("click", () => {
    window.location.href = "https://github.com/x5red78-HACKC1UB/Caculator";
  });
}

if (calcdemo) {
  calcdemo.addEventListener("click", () => {
    window.location.href = "https://x5red78-hackc1ub.github.io/Caculator/"
  });
}

if (calcrepo2) {
  calcrepo2.addEventListener("click", () => {
    window.location.href = "https://github.com/x5red78-HACKC1UB/Calculator-2";
  });
}

if (calcdemo2) {
  calcdemo.addEventListener("click", () => {
    window.location.href = "https://x5red78-hackc1ub.github.io/Calculator-2/"
  });
}


if (back) {


  back.addEventListener("click", () => {
    window.location.href = "index.html"
  });

}
if (lightdark) {
  lightdark.addEventListener("click", () => {
    if (lightdark.textContent === "☼") {
      lightdark.textContent = "⏾"
      document.body.style.backgroundColor = "black";
      intro.style.color = "white"
    } else {
      lightdark.textContent = "☼"
      document.body.style.backgroundColor = "#e4f3ff";
      intro.style.color = "black";
    }
  });
}





if (codingButton) {


  codingButton.addEventListener("click", () => {
    window.location.href = "coding.html";
  });
};
if (abtme) {
  abtme.addEventListener("click", () => {
    window.location.href = "aboutme.html"
  });
}
if (artgallery) {
  artgallery.addEventListener("click", () => {
    window.location.href = "artgallery.html"
  });
}
if (email) {
  email.addEventListener("click", () => {
    window.location.href = "https://mail.google.com/"

  });
}
//game part of the web
const game = document.getElementById("game");
const ctx = game.getContext("2d");

function resizecanvas() {
  game.width = game.clientWidth;
  game.height = game.clientWidth * 0.6;
}
resizecanvas();
window.addEventListener("resize", resizecanvas);
let playerstats = {
  x: 50,
  y: 0,
  width: game.width * 0.15,
  height: game.width * 0.12,
  speed: 7,
};
let blocks = {
  x: 100,
  y: 0,
  size: 60,
  speed: 4
}
let score = 0;
let broswerkey=0;
let broswerkey2=0;
let keys = {};
const playerImg= new Image();
playerImg.src="gubby.png"
playerImg.onload = () => {
  console.log("Player image loaded!");
  broswerkey=1;
  startgame();
};
document.fonts.ready.then(() => {
  console.log("Fonts loaded!");
  broswerkey2=1;
  startgame();
});
function startgame(){
if (broswerkey===1&&broswerkey2===1) {
  fpsLoop();
}
};

document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);

window.addEventListener("keydown", (e) => {
  if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
    e.preventDefault();
  }
});

function gameupdate() {
  if (keys["ArrowLeft"]) playerstats.x -= playerstats.speed;
  if (keys["ArrowRight"]) playerstats.x += playerstats.speed;

  blocks.y += blocks.speed;
  if (blocks.y>game.height) {
    blocks.y=0;
    blocks.x = Math.random() * (game.width - blocks.size);
  }

  if (blocks.y + blocks.size>=playerstats.y &&
    blocks.x+blocks.size>=playerstats.x &&
    blocks.x<=playerstats.x +playerstats.width
  ) {
    score+=1;
    scoreanimation();
    playerstats.width=game.height*0.15;
  playerstats.height=game.height*0.12;
    blocks.y=0;
     blocks.x = Math.random() * (game.width - blocks.size);
  }
}
function draw() {
  ctx.clearRect(0,0,game.width,game.height);

ctx.drawImage(playerImg,playerstats.x,playerstats.y,playerstats.width,playerstats.height);

  ctx.fillStyle="green"
  ctx.fillRect(blocks.x,blocks.y,blocks.size,blocks.size);

  //Scroe
  ctx.fillStyle="rgba(5,94,11,0.9)"
 ctx.font = "20px 'Press Start 2P'";
  ctx.fillText(score,60,60);
}
function fpsLoop() {
  playerstats.y = game.height-playerstats.height-10;
  gameupdate();
  draw();
  requestAnimationFrame(fpsLoop);
}
function scoreanimation(){
  playerstats.width=game.height*0.21;
  playerstats.height=game.height*0.18;
}
