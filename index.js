const codingButton = document.getElementById("codeprojects");
const githubrepo= document.getElementById("githubrepo");
const actualdemo = document.getElementById("actualweb");
const githubrepo1= document.getElementById("githubrepo1");
const actualdemo1 = document.getElementById("actualweb1");
const lightdark= document.getElementById("light-dark");
const back= document.getElementById("back")
if(githubrepo){
githubrepo.addEventListener("click",()=>{
window.location.href="https://github.com/x5red78-HACKC1UB/money-cliker"
});
};
if (actualdemo) {
  
  actualdemo.addEventListener("click", () =>{
window.location.href="https://x5red78-hackc1ub.github.io/money-cliker/"
});

}

if (githubrepo1) {
  githubrepo1.addEventListener("click",()=>{
window.location.href="https://github.com/x5red78-HACKC1UB/password-generator"
});
};
if(actualdemo1){
actualdemo1.addEventListener("click", () =>{
window.location.href="https://x5red78-hackc1ub.github.io/password-generator/"
});
};

if (back) {
  

back.addEventListener(click, ()=>{
window.location.href="index.html"
});

}





if (codingButton) {
  

codingButton.addEventListener("click", () => {
  window.location.href="coding.html";
});
};
