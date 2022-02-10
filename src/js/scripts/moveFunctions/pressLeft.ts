import { canIpress, constants } from "../../data/constants";
import { setPosition } from "../setFunctions/setPosition";
import { createRandomCell } from "../createFunctions/createRandomCell";
import { matrix } from "../startGame";
const pressLeft = () => {
  canIpress.canPressLeft = false;
  for (let i = 0; i < constants.size; i++) {
    for (let j = 1; j < constants.size; j++) {
      if (matrix[i][j]) {
        let k = j;
        while (k != 0) {
          if (matrix[i][k - 1] === matrix[i][k]) {
            matrix[i][k - 1] = matrix[i][k - 1] + matrix[i][k];
            matrix[i][k] = 0;
            const cell = document.querySelector(
              `#x${i}y${k}`
            ) as HTMLDivElement;
            setPosition(cell, k - 1, i);
          } else if (matrix[i][k - 1] === 0) {
            const cell = document.querySelector(
              `#x${i}y${k}`
            ) as HTMLDivElement;
            matrix[i][k - 1] = matrix[i][k];
            matrix[i][k] = 0;
            setPosition(cell, k - 1, i);
          }
          k--;
        }
      }
    }
  }
};

export const toLeft = () => {
  new Promise<void>((res) => {
    if (canIpress.canPressDown) {
      pressLeft();
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
