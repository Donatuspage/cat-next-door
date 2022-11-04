const mobile = document.getElementById("mobile")
const nav = document.getElementById("navlink")

if (nav) {
 nav.addEventListener("click",() => {
 mobile.classList.add("active")
 }) 
}
  
