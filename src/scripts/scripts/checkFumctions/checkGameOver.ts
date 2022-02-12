import { canIpress } from "../../data/constants";
import { endGame } from "../gameFunctions/endGame";

export const checkGameOver = () => {
  if (
    !canIpress.canPressLeft &&
    !canIpress.canPressRight &&
    !canIpress.canPressDown &&
    !canIpress.canPressUp
  ) {
    endGame();
  }
};
