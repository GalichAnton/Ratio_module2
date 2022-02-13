import { constants, time } from "../../data/constants";
import {
  gameEnd,
  gameStopBtn,
  gameStartBtn,
  millisecondsElem,
  minutesElem,
  secondsElem,
} from "../../data/elements";

export const clearGame = () => {
  for (let i = 0; i < constants.size; i++) {
    for (let j = 0; j < constants.size; j++) {
      const elem = document.querySelector(`#x${i}y${j}`);
      elem && elem.remove();
    }
  }
  time.seconds = 0;
  secondsElem.textContent = "0" + time.seconds;
  time.minutes = 0;
  minutesElem.textContent = "0" + time.minutes;
  time.milliSeconds = 0;
  millisecondsElem.textContent = "0" + time.milliSeconds;
  gameEnd.classList.remove("game__end-active");
  gameStartBtn.removeAttribute("disabled");
  gameStopBtn.setAttribute("disabled", "true");
};
