const css = document.querySelector('h3');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const body = document.querySelector('#gradient');
const random = document.querySelector('#random');

function setGradient() {
  body.style.background = `linear-gradient(to right,
    ${color1.value}, ${color2.value})`;
  css.textContent = `${body.style.background};`;
}

function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  body.style.background = `linear-gradient(to right,
    rgb(${red}, ${green}, ${blue}), rgb(${red}, ${green}, ${blue}))`;
  css.textContent = `${body.style.background};`;
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

random.addEventListener('click', randomColor);

setGradient();