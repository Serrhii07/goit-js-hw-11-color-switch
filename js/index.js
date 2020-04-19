const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');

btnStartRef.addEventListener('click', handleBodyColorStart);
btnStopRef.addEventListener('click', handleBodyColorStop);

let intervalId = null;

function handleBodyColorStart() {
  btnStartRef.setAttribute('disabled', 'true');
  intervalId = setInterval(() => {
    changeColor();
  }, 1000);
}

function changeColor() {
  bodyRef.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function handleBodyColorStop() {
  btnStartRef.removeAttribute('disabled');
  clearInterval(intervalId);
}
