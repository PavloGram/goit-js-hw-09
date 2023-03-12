import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const timerEl = document.querySelector('.timer');
const startBtn = document.querySelector('[data-start]');

timerEl.style.gap = '10px';
timerEl.style.display = 'flex';
startBtn.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.now() > selectedDates[0].getTime()) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
    }

    startBtn.addEventListener('click', startTimer);
    function startTimer(e) {
      const timerId = setInterval(() => {
        const startTime = selectedDates[0] - Date.now();
    
        function convertMs(ms) {
          const second = 1000;
          const minute = second * 60;
          const hour = minute * 60;
          const day = hour * 24;

          const days = Math.floor(ms / day);

          const hours = Math.floor((ms % day) / hour);

          const minutes = Math.floor(((ms % day) % hour) / minute);

          const seconds = Math.floor((((ms % day) % hour) % minute) / second);

          return { days, hours, minutes, seconds };
        }

        console.log(convertMs(startTime));
        
      }, 1000);
    }
  },
};

flatpickr('#datetime-picker', options);
