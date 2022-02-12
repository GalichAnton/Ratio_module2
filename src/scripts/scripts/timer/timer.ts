import { time } from "../../data/constants";

const minutesElem = document.querySelector("#minutes") as HTMLSpanElement;
const secondsElem = document.querySelector("#seconds") as HTMLSpanElement;
const millisecondsElem = document.querySelector(
  "#milliseconds"
) as HTMLSpanElement;

export const timer = () => {
  // milliseconds
  time.milliSeconds++;
  if (time.milliSeconds < 9) {
    millisecondsElem.textContent = "0" + time.milliSeconds;
  }
  if (time.milliSeconds > 9) {
    millisecondsElem.textContent = String(time.milliSeconds);
  }
  if (time.milliSeconds > 99) {
    time.seconds++;
    secondsElem.textContent = "0" + time.seconds;
    time.milliSeconds = 0;
    millisecondsElem.textContent = "0" + time.milliSeconds;
  }
  // seconds
  if (time.seconds <= 9) {
    secondsElem.textContent = "0" + time.seconds;
  }
  if (time.seconds > 9) {
    secondsElem.textContent = String(time.seconds);
  }
  if (time.seconds > 59) {
    time.minutes++;
    minutesElem.textContent = "0" + time.minutes;
    time.seconds = 0;
    secondsElem.textContent = "0" + time.seconds;
  }
  // minutes
  if (time.minutes > 9) {
    minutesElem.textContent = String(time.minutes);
  }
};
