import { constants, time } from "../../data/constants";

export const clearGame = () => {
  for (let i = 0; i < constants.size; i++) {
    for (let j = 0; j < constants.size; j++) {
      const elem = document.querySelector(`#x${i}y${j}`);
      elem && elem.remove();
    }
  }
  time.seconds = 0;
  time.minutes = 0;
  time.milliSeconds = 0;
};
