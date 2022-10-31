"use strict";

let question = document.querySelectorAll(".question");
let title = document.querySelectorAll(".title");
let arrow = document.querySelectorAll(".arrow");
let p = document.querySelectorAll(".p");
let question2 = document.querySelector(".question2");
let title2 = document.querySelector(".title2");
let arrow2 = document.querySelector(".arrow2");
let p2 = document.querySelector(".p2");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    title[i].classList.toggle("titleDis");
    title[i].classList.toggle("titleAct");

    p[i].classList.toggle("pAct");
    p[i].classList.toggle("pDis");

    arrow[i].classList.toggle("arrowDown");
    arrow[i].classList.toggle("arrowUp");
  });
}

title2.addEventListener("click", function () {
  title2.classList.toggle("titleDis");
  title2.classList.toggle("titleAct");

  p2.classList.toggle("p2Act");
  p2.classList.toggle("p2");

  arrow.classList.toggle("arrowDown");
  arrow.classList.toggle("arrowUp");
});

arrow2.addEventListener("click", function () {
  title2.classList.toggle("titleDis");
  title2.classList.toggle("titleAct");

  p2.classList.toggle("p2Act");
  p2.classList.toggle("p2");

  arrow.classList.toggle("arrowDown");
  arrow.classList.toggle("arrowUp");
});
