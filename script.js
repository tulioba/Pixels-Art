/* eslint-disable prefer-arrow-callback */
const pixelBoard = document.getElementById('pixel-board');
const resetButton = document.getElementById('clear-board');
const pixel = document.getElementsByClassName('pixel');
function createSquare(rowSize) {
  for (let index = 0; index < rowSize * rowSize; index += 1) {
    let individualPixel = pixelBoard[index];
    let pixel = document.createElement('p');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
    pixel.style.backgroundColor = 'white';
  }
}
createSquare(5);
// let input = document.getElementById("board-size");
let button = document.getElementById('board-size');

button.addEventListener('change', function () {
  for (let index = 0; index < pixel; index += 1) {
    pixelBoard.remove()[index];
  }
  createSquare(button.value);
});

const pixel1 = document.getElementById('color1');
const pixel2 = document.getElementById('color2');
const pixel3 = document.getElementById('color3');
const pixel4 = document.getElementById('color4');
const allPixels = [pixel1, pixel2, pixel3, pixel4];
let colors = ['rgb(0, 0, 0)', 'rgb(47, 58, 58)', 'blueviolet', 'goldenrod'];
let currentColor = colors[0];

pixel1.addEventListener('click', function () {
  pixel1.classList.add('selected');
  pixel2.classList.remove('selected');
  pixel3.classList.remove('selected');
  pixel4.classList.remove('selected');
  currentColor = colors[0];
});

pixel2.addEventListener('click', function () {
  pixel1.classList.remove('selected');
  pixel2.classList.add('selected');
  pixel3.classList.remove('selected');
  pixel4.classList.remove('selected');
  currentColor = colors[1];
});

pixel3.addEventListener('click', function () {
  pixel1.classList.remove('selected');
  pixel2.classList.remove('selected');
  pixel3.classList.add('selected');
  pixel4.classList.remove('selected');
  currentColor = colors[2];
});

pixel4.addEventListener('click', function () {
  pixel1.classList.remove('selected');
  pixel2.classList.remove('selected');
  pixel3.classList.remove('selected');
  pixel4.classList.add('selected');
  currentColor = colors[3];
});

pixelBoard.addEventListener('click', function (event) {
  event.target.style.backgroundColor = currentColor;
});

resetButton.addEventListener('click', function () {
  for (let index = 0; index < 25; index += 1) {
    document.getElementsByClassName('pixel')[index].style.backgroundColor =
      'white';
  }
});

let createBoard = document.getElementById('generate-board');
let boardSize = document.getElementById('board-size');

// let fontSize = document.getElementById("fontSize");
//   createBoard.addEventListener("change", function () {
//     let texto = document.getElementById("texto");
//     document.body.style.fontSize = `${createBoard.value}px`;
// //     localStorage.setItem("font-Size", `${fontSize.value}px`)
//   });

// for (let index = 0; index < allPixels.length; index += 1){
//     addEventListener("click", function(){
//         if (this.addEventListener === pixel1){
//             allPixels.classList.remove("selectec")
//         }
//     })
// }

// const firstLi = document.getElementById('first-li');
// const secondLi = document.getElementById('second-li');
// const thirdLi = document.getElementById('third-li');
// const input = document.getElementById('input');
// const myWebpage = document.getElementById('my-spotrybefy');

// firstLi.addEventListener("click", function(){
//   firstLi.classList.add("tech");
//   secondLi.classList.remove("tech");
//   thirdLi.classList.remove("tech");
// })
