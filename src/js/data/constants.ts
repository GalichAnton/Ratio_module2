export const game = document.querySelector<HTMLDivElement>(".game__table");
export const gameCount =
  document.querySelector<HTMLSpanElement>("#score-count");
export const gameOver = document.querySelector<HTMLDivElement>(".game__end");
interface IConstants {
  size: number;
  colors: string[];
}

export const constants: IConstants = {
  size: 5,
  colors: [
    "#c3f3c7",
    "#b0f5b7",
    "#a9e8b0",
    "#9edba4",
    "#76c47e",
    "#71bd79",
    "#61ad69",
    "#499e51",
    "#418c48",
    "#34783a",
  ],
};
