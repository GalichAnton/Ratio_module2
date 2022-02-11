import "./styles/style.css";
import { constants, game,  gameStart } from "./scripts/data/constants";
import {  startGame } from "./scripts/scripts/startGame";
import { createTable } from "./scripts/scripts/createFunctions/createCell";
createTable(game, constants.size);
gameStart.addEventListener("click", () => {
  startGame();
});
