import { setColor } from "./setColor";
import { winGame } from "../gameFunctions/winGame";

export const setPosition = (elem: HTMLElement, x: number, y: number) => {
  const cell = document.querySelector<HTMLDivElement>(`#x${y}y${x}`);
  if (cell) {
    cell.remove();
    elem.textContent = String(+elem.textContent! * 1024);
    elem.style.backgroundColor = setColor(+elem.textContent)!;
  }
  if (elem.textContent === "2048") {
    winGame();
  }
  elem.style.left = x * 20 + "%";
  elem.style.top = y * 20 + "%";
  elem.id = `x${y}y${x}`;
};
