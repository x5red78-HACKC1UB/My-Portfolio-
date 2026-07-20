const codingButton = document.getElementById("codeprojects");
const abtme= document.getElementById("abtme");
const email= document.getElementById("email");
const artgallery=document.getElementById("art");
const moneyclickerrepo= document.getElementById("githubrepomoney");
const moneyclickeractualdemo = document.getElementById("actualwebmoney");
const passwordrepo= document.getElementById("githubrepopassword");
const passwordemo = document.getElementById("actualwebpassword");
const lightdark= document.getElementById("light-dark");
const back= document.getElementById("back");
const intro= document.getElementById("greetings");


const calcrepo= document.getElementById("githubrepocalc");
const calcdemo = document.getElementById("actualwebcalc");

const calcrepo2= document.getElementById("githubrepocalc2");
const calcdemo2 = document.getElementById("actualwebcalc2");






if(moneyclickerrepo){
moneyclickerrepo.addEventListener("click",()=>{
window.location.href="https://github.com/x5red78-HACKC1UB/money-cliker"
});
};
if (moneyclickeractualdemo) {
  
  moneyclickeractualdemo.addEventListener("click", () =>{
window.location.href="https://x5red78-hackc1ub.github.io/money-cliker/"
});

}

if (passwordrepo) {
  passwordrepo.addEventListener("click",()=>{
window.location.href="https://github.com/x5red78-HACKC1UB/password-generator"
});
};
if(passwordemo){
passwordemo.addEventListener("click", () =>{
window.location.href="https://x5red78-hackc1ub.github.io/password-generator/"
});
};
if (calcrepo) {
  calcrepo.addEventListener("click",()=>{
 window.location.href="https://github.com/x5red78-HACKC1UB/Caculator";
  });
}

if (calcdemo) {
  calcdemo.addEventListener("click",()=>{
window.location.href="https://x5red78-hackc1ub.github.io/Caculator/"
  });
}

if (calcrepo2) {
  calcrepo2.addEventListener("click",()=>{
 window.location.href="https://github.com/x5red78-HACKC1UB/Calculator-2";
  });
}

if (calcdemo2) {
  calcdemo.addEventListener("click",()=>{
window.location.href="https://x5red78-hackc1ub.github.io/Calculator-2/"
  });
}


if (back) {
  

back.addEventListener("click", ()=>{
window.location.href="index.html"
});

}
if (lightdark) {
  lightdark.addEventListener("click",()=>{
 if (lightdark.textContent==="☼") {
  lightdark.textContent ="⏾"
  document.body.style.backgroundColor="black";
  intro.style.color="white"
 } else {
   lightdark.textContent ="☼"
   document.body.style.backgroundColor="#e4f3ff";
   intro.style.color="black";
 }
  });
}





if (codingButton) {
  

codingButton.addEventListener("click", () => {
  window.location.href="coding.html";
});
};
if (abtme) {
  abtme.addEventListener("click",()=>{
window.location.href="aboutme.html"
  });
}
if (artgallery) {
  artgallery.addEventListener("click",()=>{
window.location.href="artgallery.html"
  });
}
if (email) {
  email.addEventListener("click",()=>{
window.location.href="https://mail.google.com/"
  
  });
}
//game part of the web
const game=document.getElementById("game");
const ctx=game.getContext("2d");

function resizecanvas() {
  game.width = game.clientWidth;
   game.height = game.clientWidth * 0.6;
}
resizecanvas();
window.addEventListener("resize",resizecanvas);
let playerstats={
  x:50,
  y:0,
  width:60,
  height:20,
  speed:7,
};
let blocks={
  x:100,
  y:0,
  size:30,
speed:4
}
let score =0;
let keys={};

document.addEventListener("keydown",(e)=>keys[e.key]=true);
document.addEventListener("keyup",(e)=>keys[e.key]=false);
window.addEventListener("keydown", (e)=>{
if (["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.key)) {
  e.preventDefault();
}
});