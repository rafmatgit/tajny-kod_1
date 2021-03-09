import "./style.css";

const display = document.querySelector(".display");
const resetBtn = document.querySelector(".keyboard__button--reset");
const saveBtn = document.querySelector(".keyboard__button--save");
const keyboard = document.querySelectorAll(".keyboard__button");
let displayArr = [];

keyboard.forEach(key => {
  key.addEventListener("click", () => {
    if (key.dataset.value >= 0 && key.dataset.value <= 9) {
      displayArr.push(key.dataset.value);
    }
  });
});

resetBtn.addEventListener("click", () => {
  display.textContent = "";
  displayArr = [];
});

saveBtn.addEventListener("click", () => {
  display.textContent = displayArr.join("");
});
