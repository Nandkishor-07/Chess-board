document.addEventListener("DOMContentLoaded", () => {
  const chess = document.getElementById("chessboard");

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const squareDiv = document.createElement("div");
      squareDiv.classList.add('square');
      if ((row + col) % 2 === 0) {
        squareDiv.classList.add("black");
      } else {
        squareDiv.classList.add("white");
      }
      chess.appendChild(squareDiv);
    }
  }
});
