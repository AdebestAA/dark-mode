console.log("chnage");
let currentTheme = "light-theme"
document.documentElement.className= currentTheme
localStorage.setItem("theme",currentTheme)

const changeBgColor = ()=>{
    // console.log("presse");
    if (localStorage.getItem("theme") === "dark-theme") {
        currentTheme = "light-theme"
        document.documentElement.className = currentTheme
        localStorage.setItem("theme",currentTheme)
    }
    else  {
        currentTheme = "dark-theme"
          document.documentElement.className = currentTheme
        localStorage.setItem("theme",currentTheme)
    }
  console.log(  btn.textContent);
  if (currentTheme === "dark-theme") {
    btn.textContent = "light"
  }
  else{
    btn.textContent = "dark"
  }
}
const btn = document.querySelector(".btn")
btn.addEventListener("click",changeBgColor)