let container = document.querySelector('.container');

function createGrid(number = 16) {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j< number; j++) {
      let square = document.createElement('div');
      square.style.minWidth = `${80 / number}vh`;
      container.appendChild(square);
    }
  }
}

createGrid(50);

let squares = container.childNodes;
for (const square of squares){
  square.addEventListener('mouseover', color);
}

function color(event){
  event.target.style.backgroundColor = `Black`;
}

