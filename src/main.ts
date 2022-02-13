import "./styles/style.css";
import { constants } from "./scripts/data/constants";
import { startGame } from "./scripts/scripts/gameFunctions/startGame";
import { createTable } from "./scripts/scripts/createFunctions/createCell";
import { game, gameStopBtn, gameStartBtn } from "./scripts/data/elements";
import { swipeFunction } from "./scripts/scripts/swipeFunctions/swipeFunction";
import { endGame } from "./scripts/scripts/gameFunctions/endGame";
createTable(game, constants.size);
gameStartBtn.addEventListener("click", () => {
  startGame();
});
gameStopBtn.addEventListener("click", () => {
  endGame();
});
swipeFunction(game);
