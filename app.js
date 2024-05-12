const gameBoard = document.getElementById("game-board"); // board
let snakeBody = [{ x: 11, y: 11 }, { x: 12, y: 11 }, { x: 13, y: 11 }, { x: 14, y: 11 }];
let direction = null;
let foodPosition = null;


function drawBoard() {
    gameBoard.innerHTML = ''; // refresh the board
    // create the snake
    snakeBody.forEach(body => {
        let snake = document.createElement("div");
        snake.style.backgroundColor = "green";
        // set snake position
        snake.style.gridColumnStart = body.x;
        snake.style.gridRowStart = body.y;
        // add the snake to the board
        gameBoard.appendChild(snake);
    });

}

function createFood() {}

function update() {
    if (direction === "up") {
        let newHead = { x: snakeBody[0].x, y: snakeBody[0].y - 1 };
        snakeBody.unshift(newHead);
        snakeBody.pop();
    } else if (direction === "down") {
        let newHead = { x: snakeBody[0].x, y: snakeBody[0].y + 1 };
        snakeBody.unshift(newHead);
        snakeBody.pop();
    } else if (direction === "left") {
        let newHead = { x: snakeBody[0].x - 1, y: snakeBody[0].y };
        snakeBody.unshift(newHead);
        snakeBody.pop();
    } else if (direction === "right") {
        let newHead = { x: snakeBody[0].x + 1, y: snakeBody[0].y };
        snakeBody.unshift(newHead);
        snakeBody.pop();
    }
    if (snakeBody[0].x > 22 || snakeBody[0].y > 22 || snakeBody[0].x < 0 || snakeBody[0].y < 0) gameOver()

}

document.addEventListener('keydown', function(event) {
    // Up arrow
    if (event.key === 'ArrowUp' && direction !== 'down') {
        direction = 'up';

    }
    // Down arrow
    else if (event.key === 'ArrowDown' && direction !== 'up') {
        direction = 'down';

    }
    // Left arrow
    else if (event.key === 'ArrowLeft' && direction !== 'right') {
        direction = 'left';

    }
    // Right arrow
    else if (event.key === 'ArrowRight' && direction !== 'left') {
        direction = 'right';

    }

});


function gameOver() {

    alert("GAME OVER!");
    snakeBody = [{ x: 11, y: 11 }]
    direction = null;

}
setInterval(() => {
    drawBoard()
    update()

}, 100);
// window.requestAnimationFrame(() => {
//     drawBoard()
//     update()
//     console.log(alhp);
// })