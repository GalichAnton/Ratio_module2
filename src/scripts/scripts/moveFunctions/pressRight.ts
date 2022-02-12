import { canIpress } from "../../data/constants";
import { setPosition } from "../setFunctions/setPosition";
import { createRandomCell } from "../createFunctions/createRandomCell";
import { matrix } from "../gameFunctions/startGame";
const pressRight = () => {
  canIpress.canPressRight = false;
  for (let i = 4; i >= 0; i--) {
    for (let j = 3; j >= 0; j--) {
      if (matrix[i][j]) {
        let k = j;
        while (k != 4) {
          if (matrix[i][k + 1] === matrix[i][k]) {
            matrix[i][k + 1] = matrix[i][k + 1] + matrix[i][k];
            matrix[i][k] = 0;
            const cell = document.querySelector(
              `#x${i}y${k}`
            ) as HTMLDivElement;
            setPosition(cell, k + 1, i);
            canIpress.canPressRight = true;
          } else if (matrix[i][k + 1] === 0) {
            matrix[i][k + 1] = matrix[i][k];
            matrix[i][k] = 0;
            const cell = document.querySelector(
              `#x${i}y${k}`
            ) as HTMLDivElement;
            setPosition(cell, k + 1, i);
            canIpress.canPressRight = true;
          }
          k++;
        }
      }
    }
  }
};

export const toRight = () => {
  new Promise<void>((res) => {
    if (canIpress.canPressDown) {
      pressRight();
      res();
    }
  }).then(() => {
    createRandomCell();
    createRandomCell();
  });
};
