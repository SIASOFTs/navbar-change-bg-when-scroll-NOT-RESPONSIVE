let menuMain = document.querySelector(".menu_main");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    menuMain.classList.add("isSrolling");
  } else {
    menuMain.classList.remove("isSrolling");
  }
});
