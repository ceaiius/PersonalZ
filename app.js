const menuBtn = document.querySelector(".menu-btn");
const navUL = document.querySelector(".nav-ul");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if(!menuOpen){
        menuBtn.classList.add("open");
        navUL.classList.add("show")
        menuOpen = true;
    }else {
        menuBtn.classList.remove("open");
        navUL.classList.remove("show")
        menuOpen = false;
    }
})