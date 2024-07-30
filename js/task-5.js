function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorOutput = document.querySelector('.color');

function onButtonClick() {
  body.style.backgroundColor = getRandomHexColor();
  colorOutput.innerHTML = body.style.backgroundColor;
}

changeColorBtn.addEventListener('click', onButtonClick);
