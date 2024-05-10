const gameBoard = document.getElementById("game-board");

let snakeBody = [{ x: 1, y: 5 }];

function update() {

    snakeBody = snakeBody.map(segment => ({ x: segment.x + 1, y: segment.y }));
    gameBoard.innerHTML = '';
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    });
}

setInterval(update, 500); // Corrected to pass the function reference