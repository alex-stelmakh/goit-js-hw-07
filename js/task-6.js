function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input[type="number"]');
const createBtn = controls.querySelector('button[data-create]');
const destroyBtn = controls.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});
destroyBtn.addEventListener('click', () => (boxesContainer.innerHTML = ''));

function createBoxes(amount) {
  const boxesHTML = [];
  for (let i = 0; i < amount; i++) {
    const boxSize = 30 + i * 10;
    const boxColor = getRandomHexColor();
    boxesHTML.push(`
      <div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${boxColor};"></div>`);
  }
  boxesContainer.innerHTML = boxesHTML.join('');
}
