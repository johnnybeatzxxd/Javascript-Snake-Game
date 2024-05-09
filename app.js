const gameBorder = document.getElementById("gameBorder");

const dot = document.createElement("div");
dot.style.width = "20px";
dot.style.height = "20px";
dot.style.backgroundColor = "red";
dot.style.position = "absolute";
gameBorder.appendChild(dot);

let x = 10;
let y = 10;

function updateDotPosition() {
    dot.style.left = x + "px";
    dot.style.top = y + "px";
}


updateDotPosition();
setInterval(() => {
    console.log(x, y)
    x = x + 1;

    updateDotPosition()
}, 10000)