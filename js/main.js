const elBnt = document.querySelector(".site-header__burder-btn");
const elMenu = document.querySelector(".site-header__inner-navbar");
let isOpen = true;

elBnt.addEventListener("click", function (e) {
    elMenu.classList.add("site-header__inner-navbar--open");
});
elBnt.addEventListener("click", function (e) {
    elMenu.classList.remove("site-header__inner-navbar--open");
});

const elLabel1 = document.querySelector(".form__input-tab-1");
const elList1 = document.querySelector(".service__inner-list-suv");
const elLabel2 = document.querySelector(".form__input-tab-2");
const elList2 = document.querySelector(".service__inner-list-biznes");
const elLabel3 = document.querySelector(".form__input-tab-3");
const elList3 = document.querySelector(".service__inner-list-sportcar");
const elLabel4 = document.querySelector(".form__input-tab-4");
const elList4 = document.querySelector(".service__inner-list-premium");
const elLabel5 = document.querySelector(".form__input-tab-5");
const elList5 = document.querySelector(".service__inner-list-qulay");

elLabel1.addEventListener("click", function (e) {
    elList1.classList.add('menu--open');
    elList2.classList.remove('menu--open');
    elList3.classList.remove('menu--open');
    elList4.classList.remove('menu--open');
    elList5.classList.remove('menu--open');
});
elLabel2.addEventListener("click", function (e) {
    elList2.classList.add('menu--open');
    elList1.classList.remove('menu--open');
    elList3.classList.remove('menu--open');
    elList4.classList.remove('menu--open');
    elList5.classList.remove('menu--open');
});
elLabel3.addEventListener("click", function (e) {
    elList3.classList.add('menu--open');
    elList1.classList.remove('menu--open');
    elList2.classList.remove('menu--open');
    elList4.classList.remove('menu--open');
    elList5.classList.remove('menu--open');
});
elLabel4.addEventListener("click", function (e) {
    elList4.classList.add('menu--open');
    elList1.classList.remove('menu--open');
    elList2.classList.remove('menu--open');
    elList3.classList.remove('menu--open');
    elList5.classList.remove('menu--open');
});
elLabel5.addEventListener("click", function (e) {
    elList5.classList.add('menu--open');
    elList1.classList.remove('menu--open');
    elList2.classList.remove('menu--open');
    elList3.classList.remove('menu--open');
    elList4.classList.remove('menu--open');
});
