const codingButton = document.getElementById("codeprojects");
const moneyclickerrepo= document.getElementById("githubrepomoney");
const moneyclickeractualdemo = document.getElementById("actualwebmoney");
const passwordrepo= document.getElementById("githubrepopassword");
const passwordemo = document.getElementById("actualwebpasswors");
const lightdark= document.getElementById("light-dark");
const back= document.getElementById("back");
const intro= document.getElementById("greetings");


const calcrepo= document.getElementById("githubrepocalc");
const calcdemo = document.getElementById("actualwebcalc");





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
