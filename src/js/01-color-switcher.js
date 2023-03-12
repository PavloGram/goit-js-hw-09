const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', startBtnActive);
stopBtn.addEventListener('click', stopBtnActive);

let timerId = 0;

function startBtnActive(e) {
  return (timerId = setInterval(() => {
    body.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
    startBtn.setAttribute('disabled', 'disabled');
  }, 1000));
}

function stopBtnActive() {
  clearTimeout(timerId);
  startBtn.removeAttribute('disabled');
}
