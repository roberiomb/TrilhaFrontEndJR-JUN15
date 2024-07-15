let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let retangulos = document.querySelector(".retangulos");
let items = retangulos.querySelectorAll("#items");

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

nextButton.onclick = () => {
  let itemOld = retangulos.querySelector(".active");
  itemOld.classList.remove('active');

  active = active + 1 > lastPosition ? 0 : active + 1;
  items[active].classList.add('active');
};