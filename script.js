let container = document.querySelector('.container');

function createGrid(number = 16) {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j< number; j++) {
      let square = document.createElement('div');
      square.style.minWidth = `${500 / number}px`;
      container.appendChild(square);
    }
  }
}

createGrid(16);
