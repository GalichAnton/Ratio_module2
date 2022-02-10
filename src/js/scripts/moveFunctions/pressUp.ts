import { canIpress, constants } from "../../data/constants";
import { setPosition } from "../setFunctions/setPosition";
import { createRandomCell } from "../createFunctions/createRandomCell";
import { matrix } from "../startGame";
const pressUp = () => {
  canIpress.canPressUp = false;
  for (let i = 0; i < constants.size; i++) {
    for (let j = 1; j < constants.size; j++) {
      if (matrix[j][i]) {
        let k = j;
        while (k != 0) {
          if (matrix[k - 1][i] === matrix[k][i]) {
            matrix[k - 1][i] = matrix[k - 1][i] + matrix[k][i];
            matrix[k][i] = 0;
            const cell = document.querySelector(
              `#x${k}y${i}`
            ) as HTMLDivElement;
            setPosition(cell, i, k - 1);
          } else if (matrix[k - 1][i] === 0) {
            matrix[k - 1][i] = matrix[k][i];
            matrix[k][i] = 0;
            const cell = document.querySelector(
              `#x${k}y${i}`
            ) as HTMLDivElement;
            setPosition(cell, i, k - 1);
          }
          k--;
        }
      }
    }
  }
};

export const toUp = () => {
  new Promise<void>((res) => {
    if (canIpress.canPressDown) {
      pressUp();
      res();
    }
  }).then(() => {
    createRandomCell();
    createRandomCell();
    console.log(
      canIpress.canPressDown,
      canIpress.canPressUp,
      canIpress.canPressRight,
      canIpress.canPressLeft
    );
  });
};
