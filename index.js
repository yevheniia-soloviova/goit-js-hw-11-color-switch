const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

// console.log(bodyRef);
// console.log(stopButton);

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);




const timer = {
  intervalId: null,
  isActive: false,

    start() {
      if (this.isActive) {
        return;
      }

      this.isActive = true;
      this.intervalId = setInterval(colorSwitcher, 1000);
    },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  }
};

const colorSwitcher = () => {
  bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};


function onStartBtnClick(evt) {
  timer.start();
};

function onStopBtnClick(evt) {
  timer.stop();
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(colors.length);