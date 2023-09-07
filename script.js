"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const hide = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const open = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", open);
}
btnCloseModal.addEventListener("click", hide);
overlay.addEventListener("click", hide);
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape" && !modal.classList.contains("hidden")) {
    hide();
  }
});
