const menuMobile = document.querySelectorAll(".nav-action");
menuMobile[0].addEventListener("click", function () {
   document.querySelectorAll("header nav ul")[0].classList.toggle("active");
   document.querySelectorAll(".nav-action")[0].classList.toggle("active");
});