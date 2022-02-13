import "./styles/style.css";
import { constants } from "./scripts/data/constants";
import { startGame } from "./scripts/scripts/gameFunctions/startGame";
import { createTable } from "./scripts/scripts/createFunctions/createCell";
import { game, gameStart } from "./scripts/data/elements";
import { swipeFunction } from "./scripts/scripts/swipeFunctions/swipeFunction";
createTable(game, constants.size);
gameStart.addEventListener("click", () => {
  startGame();
});
swipeFunction(game);
