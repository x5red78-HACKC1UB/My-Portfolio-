const codingButton = document.getElementById("codeprojects");
const abtme= document.getElementById("abtme");
const moneyclickerrepo= document.getElementById("githubrepomoney");
const moneyclickeractualdemo = document.getElementById("actualwebmoney");
const passwordrepo= document.getElementById("githubrepopassword");
const passwordemo = document.getElementById("actualwebpasswors");
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
  calcrepo.addEventListener("click",()=>{
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
