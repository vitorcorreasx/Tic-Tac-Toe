document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.addEventListener('click', handleClick)
  })
})
let point1 = 0;
let point2 = 0;

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      if (winner == 0) {
        point1++
        score.innerHTML = `<h1>(${point1}) x (0)</h1>` 
      } else {
        point2++
        score.innerHTML = `<h1>(${point1}) x (${point2})</h1>` 
      }
    }, 10)
  }


  updateSquares();
}

function updateSquares() {
  let squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    let position = square.id;
    let players = board[position];

    if (players != '') {
      square.innerHTML = `<div class="${players}"></div>`
      let btn = document.querySelector('#reset')
        btn.addEventListener('click', reset);
        function reset ()  {
          gameOver = false;
          board = ['', '', '', '', '', '', '', '', ''];
          playerTime = 0;
          let squares = document.querySelectorAll('.square');
          for (let square of squares) {
            square.innerHTML = "";
          }};     
      };
  });          
};