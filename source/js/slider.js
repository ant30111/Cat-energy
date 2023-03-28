const slider = document.querySelector('.example__slider');
const before = document.querySelector('.example__slider-before');
const beforeImage = document.querySelector('.example__img');
const control = document.querySelector('.example__slider-control');

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
  let width = slider.offsetWidth;
  beforeImage.style.width = `${width}px`;
});

window.onresize = () => {
  let width = slider.offsetWidth;
  beforeImage.style.width = `${width}px`;
};

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  before.style.width = `${shift}px`;
  control.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

control.addEventListener('mousedown', () => {
  isActive = true;
});

control.addEventListener('mouseup', () => {
  isActive = false;
});

control.addEventListener('mouseleave', () => {
  isActive = false;
});

control.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});

control.addEventListener('touchstart', () => {
  isActive = true;
});

control.addEventListener('touchend', () => {
  isActive = false;
});

control.addEventListener('touchcancel', () => {
  isActive = false;
});

control.addEventListener('touchmove', (e) => {
  if (!isActive) {
    return;
  }

  let x;
  let i;

  for (i = 0; i < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});
