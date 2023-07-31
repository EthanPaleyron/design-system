// MENU BURGER
const menuBurger = document.querySelector("#menuBurger");
const lists_menu_burger = document.querySelector(".lists_menu_burger");
let ico = document.createElement("img");
menuBurger.appendChild(ico).src = "public/mobile/icon-hamburger.svg";
let isOpen = true;
menuBurger.addEventListener("click", () => {
    if (isOpen) {
        ico.src = "public/mobile/icon-cross.svg";
        lists_menu_burger.style.display = "block";
        isOpen = false;
    } else {
        ico.src = "public/mobile/icon-hamburger.svg";
        lists_menu_burger.style.display = "none";
        isOpen = true;
    }
})

// SLIDES
const carrousel = document.querySelector("#carrousel");
const title = document.querySelector("#title");
const time = document.querySelector("time");
const arrowLeft = document.querySelector("#arrowLeft");
const arrowRight = document.querySelector("#arrowRight");

let table = [{ title: "Lean Product Roadmap", time: "2019", url: "../public/image-slide-1.jpg" }, { title: "New Majestic Hotel", time: "2018", url: "../public/image-slide-2.jpg" }, { title: "Crypto Dashboard", time: "2016", url: "../public/image-slide-3.jpg" }]

let index = 0;
arrowLeft.addEventListener("click", () => {
    table[index].title;
    index--;
    if (index < 0) {
        index = table.length - 1;
    }
    title.innerHTML = table[index].title;
    time.innerHTML = table[index].time;
    carrousel.style.background = `url(${table[index].url}) no-repeat`;
})

arrowRight.addEventListener("click", () => {
    table[index].title;
    index++;
    if (index > table.length - 1) {
        index = 0;
    }
    title.innerHTML = table[index].title;
    time.innerHTML = table[index].time;
    carrousel.style.background = `url(${table[index].url}) no-repeat`;
})