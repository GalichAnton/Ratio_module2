import { toRight } from "../moveFunctions/pressRight";
import { toDown } from "../moveFunctions/pressDown";
import { toUp } from "../moveFunctions/pressUp";
import { toLeft } from "../moveFunctions/pressLeft";
const ALLOWED_TIME = 250;
const THRESHOLD = 40;
const LIMIT = 100;

let startTime = 0;
let fullTime = 0;

let startX = 0;
let startY = 0;
let distanceX = 0;
let distanceY = 0;
let distance = 0;

export const swipeFunction = (item: HTMLElement) => {
  item.addEventListener("mousedown", function (e: MouseEvent) {
    startTime = new Date().getTime();
    startX = e.pageX;
    startY = e.pageY;
    e.preventDefault();
  });

  item.addEventListener("mouseup", function (e: MouseEvent) {
    e.preventDefault();
    fullTime = new Date().getTime() - startTime;
    distanceX = e.pageX - startX;
    distanceY = e.pageY - startY;
    getDistance();
  });

  item.addEventListener("touchstart", function (e: TouchEvent) {
    startTime = new Date().getTime();
    startX = e.touches[0].pageX;
    startY = e.touches[0].pageY;
    e.preventDefault();
  });

  item.addEventListener("touchend", function (e: TouchEvent) {
    fullTime = new Date().getTime() - startTime;
    console.log(e);
    distanceX = e.changedTouches[0].pageX - startX;
    distanceY = e.changedTouches[0].pageY - startY;
    getDistance();
    e.preventDefault();
  });
};

const getDistance = () => {
  distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
  if (fullTime <= ALLOWED_TIME && distance >= THRESHOLD) {
    if (
      Math.abs(distanceY) <= LIMIT &&
      Math.abs(distanceX) > Math.abs(distanceY)
    ) {
      distanceX > 0 ? toRight() : toLeft();
    } else {
      distanceY > 0 ? toDown() : toUp();
    }
  }
};
