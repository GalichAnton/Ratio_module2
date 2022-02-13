export const game = document.querySelector<HTMLDivElement>(
  ".game__table"
) as HTMLDivElement;
export const gameEnd = document.querySelector<HTMLDivElement>(
  ".game__end"
) as HTMLDivElement;
export const gameStartBtn = document.querySelector<HTMLButtonElement>(
  ".btn__start"
) as HTMLButtonElement;
export const gameStopBtn = document.querySelector<HTMLButtonElement>(
  ".end"
) as HTMLButtonElement;
export const gameAgain = document.querySelector<HTMLButtonElement>(
  ".game__again"
) as HTMLButtonElement;
export const noThanksBtn = document.querySelector<HTMLButtonElement>(
  "#no"
) as HTMLButtonElement;
export const gameWin = document.querySelector<HTMLDivElement>(
  ".game__win"
) as HTMLDivElement;
export const updateResultBtn = document.querySelector<HTMLButtonElement>(
  ".game__win-button"
) as HTMLButtonElement;
export const resultInput = document.querySelector<HTMLInputElement>(
  ".game__win-input"
) as HTMLInputElement;
export const resultTable = document.querySelector<HTMLUListElement>(
  ".result__table"
) as HTMLUListElement;
export const minutesElem = document.querySelector(
  "#minutes"
) as HTMLSpanElement;
export const secondsElem = document.querySelector(
  "#seconds"
) as HTMLSpanElement;
export const millisecondsElem = document.querySelector(
  "#milliseconds"
) as HTMLSpanElement;
