const gameBoard = document.getElementById("game-board"); // board
let snakeBody = [{ x: 2, y: 4 }];
let direction = null;
let foodPosition = null;






function drawBoard() {
    gameBoard.innerHTML = ''; // refresh the board
    let snake = document.createElement("div");

    // create the snake
    snakeBody.forEach(body => {
        snake.style.backgroundColor = "red";
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
        snakeBody.forEach(body => {
            body.y--;
        });
    } else if (direction === "down") {
        snakeBody.forEach(body => {
            body.y++;
        });
    } else if (direction === "right") {
        snakeBody.forEach(body => {
            body.x++;
        });
    } else if (direction === "left") {
        snakeBody.forEach(body => {
            body.x--;
        });
    }

}

function setDirection() {
    document.addEventListener('keydown', function(event) {
        // Up arrow
        if (event.key === 'ArrowUp' && direction !== 'down') {
            direction = 'up';
            console.log(direction);
        }
        // Down arrow
        else if (event.key === 'ArrowDown' && direction !== 'up') {
            direction = 'down';
            console.log(direction);
        }
        // Left arrow
        else if (event.key === 'ArrowLeft' && direction !== 'right') {
            direction = 'left';
            console.log(direction);
        }
        // Right arrow
        else if (event.key === 'ArrowRight' && direction !== 'left') {
            direction = 'right';
            console.log(direction);
        }
    });
}

function gameOver() {
    direction = null;

}
setInterval(() => {
    drawBoard()
    update()

}, 200);

setDirection()