const heading = document.querySelector(".heading");
const btn01 = document.querySelector(".btn-1");
function toggleHeading() {
    heading.classList.toggle("hide");
}
btn01.addEventListener("click", toggleHeading);


const btn02 = document.querySelector(".btn-2");
const gridContainer = document.querySelector(".grid__container");
const list = Array.from(document.querySelectorAll(".grid__item"));
function changeBlocks() {
    const arr = list.slice(1, 3).reverse();
    list.splice(1, 2, ...arr);
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        gridContainer.append(list[i]);
    }
}
btn02.addEventListener("click", changeBlocks);


const btnClose = document.querySelector(".btn_close");
const modalContainer = document.querySelector(".modal__container");
const modal = document.querySelector(".modal__content");
function closeModal() {
    modalContainer.classList.add("hide");
}
btnClose.addEventListener("click", closeModal);
