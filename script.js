let container = document.querySelector('.container');

function createGrid(number = 16) {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j< number; j++) {
      let square = document.createElement('div');
      square.style.minWidth = `${700 / number}px`;
      container.appendChild(square);
    }
  }
  let squares = container.childNodes;
  for (const square of squares){
    square.addEventListener('mouseover', color);
  }
}

createGrid();

function color(event){
  event.target.style.backgroundColor = randomColor();
}

function randomColor(){
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

function redraw(){
  console.log();
  let number = prompt('How big should the grid be?(max 100)');
  if (number > 100) number = 100;
  if (number === null) return;
  var child = container.lastElementChild; 
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
  createGrid(number);
}
