const hamburger = document.querySelector(".hamburger"); 
const navMenu = document.querySelector(".nav-links"); 

hamburger.addEventListener("click" , ( )=> {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-items a").forEach(n => n.addEventListener("click" , () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))