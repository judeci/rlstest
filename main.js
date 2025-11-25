import { resources } from "/components/translation.js";

const langBtn = document.querySelector(".langBtn");
const body = document.body;
let currentLang = "en";
const btnCard = document.querySelector(".btnCard");
const card = document.querySelector(".cardCU");
const cardTX = document.querySelector(".cardTX");
const discX = document.querySelector(".discX");
const disclaimerCU = document.querySelector(".disclaimerCU");
const cutBoxTest = document.querySelector(".cut-boxTEST");
const shapeImgTest = document.querySelector(".shape-imageTEST");
const shapeImgTest2 = document.querySelector(".shape-imageTEST2");

langBtn.addEventListener("click", function () {
  if (currentLang === "ar") {
    body.style.textAlign = "left";
    body.style.direction = "ltr";
    btnCard.style.right = "2.4rem";
    card.style.right = "2.4rem";
    cutBoxTest.style.clipPath = "polygon(0 0,0 100%,72% 100%,68% 40%,83% 0)";
    shapeImgTest.style.right = "-58%";
    shapeImgTest.style.transform = "scaleX(1)";
    shapeImgTest2.style.right = "-4.5%";
    currentLang = "en";
  } else if (currentLang === "en") {
    body.style.textAlign = "right";
    body.style.direction = "rtl";
    btnCard.style.right = "89rem";
    card.style.right = "66.6rem";
    cutBoxTest.style.clipPath =
      "polygon(100% 0,100% 100%,28% 100%,32% 40%,17% 0)";
    shapeImgTest.style.right = "67%";
    shapeImgTest.style.transform = "scaleX(-1)";
    shapeImgTest2.style.right = "64.5%";
    currentLang = "ar";
  }
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (resources[currentLang][key]) {
      el.textContent = resources[currentLang][key];
    }
  });
});

// //////////////////////////////////////
// //////////////////////////////////////
// //////////////////////////////////////
// //////////////////////////////////////

btnCard.addEventListener("click", function () {
  card.classList.remove("hiddenx2");
});
cardTX.addEventListener("click", function () {
  card.classList.add("hiddenx2");
});
discX.addEventListener("click", function () {
  disclaimerCU.classList.add("hiddenx2");
});

// //////////////////////////////////
// ////////////////////////////////////
