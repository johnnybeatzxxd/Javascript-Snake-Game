const gameBoard = document.getElementById("game-board"); // board
let snakeBody = [{ x: 11, y: 11 }, ];
let direction = null;
let foodPosition = null;
let snakeSpeed = 250;

function drawBoard() {
    gameBoard.innerHTML = ''; // refresh the board
    // create the snake
    snakeBody.forEach(body => {
        let snake = document.createElement("div");
        snake.className = "snake";
        // set snake position
        snake.style.gridColumnStart = body.x;
        snake.style.gridRowStart = body.y;
        // add the snake to the board
        gameBoard.appendChild(snake);
    });

    if (foodPosition === null) createFood()
    let food = document.createElement("div");
    food.className = "food";
    food.style.gridColumnStart = foodPosition.x;
    food.style.gridRowStart = foodPosition.y;
    gameBoard.appendChild(food);
}

function update() {
    let newHead = null;

    if (direction === "up") {
        newHead = { x: snakeBody[0].x, y: snakeBody[0].y - 1 };
        snakeBody.unshift(newHead);

    } else if (direction === "down") {
        newHead = { x: snakeBody[0].x, y: snakeBody[0].y + 1 };
        snakeBody.unshift(newHead);

    } else if (direction === "left") {
        newHead = { x: snakeBody[0].x - 1, y: snakeBody[0].y };
        snakeBody.unshift(newHead);

    } else if (direction === "right") {
        newHead = { x: snakeBody[0].x + 1, y: snakeBody[0].y };
        snakeBody.unshift(newHead);

    }

    // Check if the snake hit the boarder
    if (snakeBody[0].x > 22 || snakeBody[0].y > 22 || snakeBody[0].x < 0 || snakeBody[0].y < 0) gameOver()
        // Check if the snake eat the food
    if (foodPosition.x === snakeBody[0].x && foodPosition.y === snakeBody[0].y) {
        createFood();
        snakeSpeed = snakeSpeed - 20;
        changeSnakeSpeed(snakeSpeed)
    } else {
        direction != null ? snakeBody.pop() : null;
    }

}

function createFood() {

    foodPosition = { x: Math.floor(Math.random() * 21) + 1, y: Math.floor(Math.random() * 21) + 1 }
    console.log(foodPosition);
}

function gameOver() {

    alert("GAME OVER!");
    snakeBody = [{ x: 11, y: 11 }]
    direction = null;
    snakeSpeed = 250
    changeSnakeSpeed(snakeSpeed);
}

function changeSnakeSpeed(snakeSpeed) {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        drawBoard()
        update()
    }, snakeSpeed);
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

let intervalId = setInterval(() => {
    drawBoard()
    update()
}, snakeSpeed);