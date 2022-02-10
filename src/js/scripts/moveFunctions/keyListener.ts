import { toLeft } from "./pressLeft";
import { toUp } from "./pressUp";
import { toDown } from "./pressDown";
import { toRight } from "./pressRight";
export const keyListener = (e: KeyboardEvent) => {
  switch (e.key) {
    case "ArrowLeft":
      e.preventDefault();
      toLeft();
      break;
    case "ArrowUp":
      e.preventDefault();
      toUp();
      break;
    case "ArrowDown":
      e.preventDefault();
      toDown();
      break;
    case "ArrowRight":
      e.preventDefault();
      toRight();
      break;
  }
};
