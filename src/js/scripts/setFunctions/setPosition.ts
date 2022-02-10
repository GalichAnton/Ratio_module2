import { canIpress } from "../../data/constants";
import { setColor } from "./setColor";

export const setPosition = (elem: HTMLElement, x: number, y: number) => {
  const cell = document.querySelector<HTMLDivElement>(`#x${y}y${x}`);
  if (cell) {
    cell.remove();
    elem.textContent = String(+elem.textContent! * 2);
    elem.style.backgroundColor = setColor(+elem.textContent)!;
  }
  elem.style.left = x * 20 + "%";
  elem.style.top = y * 20 + "%";
  elem.id = `x${y}y${x}`;
  canIpress.canPressUp = true;
  canIpress.canPressDown = true;
  canIpress.canPressLeft = true;
  canIpress.canPressRight = true;
};
