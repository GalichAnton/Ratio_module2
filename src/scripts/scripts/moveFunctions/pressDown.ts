import { canIpress } from "../../data/constants";
import { setPosition } from "../setFunctions/setPosition";
import { createRandomCell } from "../createFunctions/createRandomCell";
import { matrix } from "../startGame";

const pressDown = () => {
  canIpress.canPressDown = false;
  for (let i = 4; i >= 0; i--) {
    for (let j = 3; j >= 0; j--) {
      if (matrix[j][i]) {
        let k = j;
        while (k != 4) {
          if (matrix[k + 1][i] === matrix[k][i]) {
            matrix[k + 1][i] = matrix[k + 1][i] + matrix[k][i];
            matrix[k][i] = 0;
            const cell = document.querySelector(
              `#x${k}y${i}`
            ) as HTMLDivElement;
            setPosition(cell, i, k + 1);
            canIpress.canPressDown = true;
          } else if (matrix[k + 1][i] === 0) {
            const cell = document.querySelector(
              `#x${k}y${i}`
            ) as HTMLDivElement;
            matrix[k + 1][i] = matrix[k][i];
            matrix[k][i] = 0;
            setPosition(cell, i, k + 1);
            canIpress.canPressDown = true;
          }
          k++;
        }
      }
    }
  }
};

export const toDown = () => {
  new Promise<void>((res) => {
    if (canIpress.canPressDown) {
      pressDown();
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
