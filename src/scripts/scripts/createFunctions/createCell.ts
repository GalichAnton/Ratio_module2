import { setColor } from "../setFunctions/setColor";

export const createTable = (parent: HTMLElement, size: number) => {
  for (let i = 0; i < size * size; i++) {
    const cellItem = document.createElement("div");
    cellItem.classList.add(`game__cell-wrapper`);
    parent.append(cellItem);
  }
};

export const createCell = (num: number) => {
  const cell = document.createElement("div");
  cell.classList.add(`game__cell`);
  cell.style.backgroundColor = setColor(num)!;
  cell.textContent = String(num);
  return cell;
};
