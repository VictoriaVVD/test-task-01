const heading = document.querySelector(".heading");
const btn01 = document.querySelector(".btn-1");
function toggleHeading() {
    heading.classList.toggle("hide");
}
btn01.addEventListener("click", toggleHeading);

const btn02 = document.querySelector(".btn-2");
const block03 = document.querySelector(".block-3");
function changeOrder() {
    let order = getComputedStyle(block03).order;
    block03.style.order = -order;
}
btn02.addEventListener("click", changeOrder);

const btnClose = document.querySelector(".btn_close");
const modalContainer = document.querySelector(".modal__container");
const modal = document.querySelector(".modal__content");
function closeModal() {
    modalContainer.classList.add("hide");
}
btnClose.addEventListener("click", closeModal);
