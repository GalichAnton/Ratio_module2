import "./styles/style.css";
import { constants, game, gameEnd, gameStart } from "./js/data/constants";
import { restartGame, startGame } from "./js/scripts/startGame";
import { createTable } from "./js/scripts/createFunctions/createCell";
createTable(game, constants.size);
gameStart.addEventListener("click", () => {
  startGame();
});
gameEnd.addEventListener("click", () => {
  restartGame();
});
