const elBnt = document.querySelector(".site-header__burder-btn");
const elMenu = document.querySelector(".site-header__inner-navbar");

elBnt.addEventListener('click', function(e) {
    elMenu.classList.toggle("site-header__inner-navbar--open");
}); 