import "./styles/style.css";
import { createMatrix } from "./js/scripts/createMatrix";
import { constants, game } from "./js/data/constants";
import { randomNum } from "./js/scripts/randomNum";
import { createTable } from "./js/scripts/createCell";
createTable(game, constants.size);
const matrix = createMatrix(constants.size);
