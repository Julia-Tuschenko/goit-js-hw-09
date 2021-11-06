import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
    input: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),
    timerConteiner: document.querySelector('.timer'),    
    dataTimer: document.querySelector('span[data-days]'),
    hoursTimer: document.querySelector('span[data-hours]'),
    minutesTimer: document.querySelector('span[data-minutes]'),
    secondsTimer: document.querySelector('span[data-seconds]'),
};

refs.btnStart.setAttribute("disabled", 'disabled');


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if(selectedDates[0] < Date.now()){
        window.alert("Please choose a date in the future");
      } else {
        refs.btnStart.removeAttribute('disabled');
      }
    },
  };

flatpickr(refs.input, options);
refs.input.addEventListener('click', flatpickr);

const selectedTime = Date.now();

function ontimerStartClick(){
  timerId = setInterval(() => {
    const currentTime = Date.now();
    const daltaTime = selectedTime - currentTime;
    const time = convertMs(daltaTime);
    startTimer(time);
  }, 1000);
}

btnStart.addEventListener('click', ontimerStartClick);

function startTimer({ days, hours, minutes, seconds}){
  refs.dataTimer.textContent = days;
  refs.hoursTimer.textContent = hours;
  refs.minutesTimer.textContent = minutes;
  refs.secondsTimer.textContent = seconds;
}

function addLeadingZero(value){
  return String(value).padStart(2, '0');
}

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
  // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}