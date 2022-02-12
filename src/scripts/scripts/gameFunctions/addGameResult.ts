import {
  gameStart,
  gameWin,
  resultInput,
  resultTable,
} from "../../data/elements";
import { time } from "../../data/constants";
import { clearGame } from "./clearGame";

export const addGameResult = () => {
  resultTable.insertAdjacentHTML(
    "beforeend",
    `<li class="result__item">
          <span class="result__name">${resultInput.value}</span>|
          <span class="result__score">${Math.ceil(
            2048 / (time.minutes * 60 + time.seconds)
          )}</span>
          </li>`
  );
  resultInput.value = "";

  gameWin.classList.remove("game__win-active");
  clearGame();
  gameStart.style.display = "";
};
