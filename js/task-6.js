const controls = document.querySelector('#controls');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');

createBtn.addEventListener('click', createItems);
destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  amount = Number(amount);
  destroyBoxes();
  let size = 30;
  const boxesArr = [];
  for (let i = 0; i < amount; i++) {
    boxesArr.push(
      `<div style="height:${size}px;width:${size}px;background-color:${getRandomHexColor()}"></div>`
    );
    size += 10;
  }
  boxes.insertAdjacentHTML('beforeend', boxesArr.join(''));
  input.value = null;
}

function createItems() {
  if (input.value > 0 && input.value <= 100) {
    createBoxes(input.value);
  } else {
    input.value = null;
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
