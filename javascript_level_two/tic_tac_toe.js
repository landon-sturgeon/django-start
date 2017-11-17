cells = document.querySelectorAll('td');
var restart = document.querySelector("#restart");

function clear() {

  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
}

function addChar() {
  if (this.textContent === '')
  {
    this.textContent = 'X';
  } else if (this.textContent === 'X') {
    this.textContent = 'O';
  } else if (this.textContent === 'O') {
    this.textContent = '';
  }
}

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', addChar)
}

restart.addEventListener('click', clear);
