import { ICanPress, IConstants } from "./types/types";
export const game = document.querySelector<HTMLDivElement>(
  ".game__table"
) as HTMLDivElement;
export const gameScore = document.querySelector<HTMLSpanElement>(
  "#score-count"
) as HTMLSpanElement;
export const gameEnd = document.querySelector<HTMLDivElement>(
  ".game__end"
) as HTMLDivElement;
export const gameStart = document.querySelector<HTMLButtonElement>(
  ".btn__start"
) as HTMLButtonElement;
export const constants: IConstants = {
  size: 5,
  colors: [
    "#c3f3c7",
    "#a9e8b0",
    "#9edba4",
    "#76c47e",
    "#71bd79",
    "#67e174",
    "#61ad69",
    "#499e51",
    "#418c48",
    "#34783a",
  ],
};

export const canIpress: ICanPress = {
  canPressDown: true,
  canPressUp: true,
  canPressLeft: true,
  canPressRight: true,
};
