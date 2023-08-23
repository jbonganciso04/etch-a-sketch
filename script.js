const container = document.getElementById("grid-container");
const resetBtn = document.getElementById("reset");
const eraserBtn = document.getElementById("eraser");
const drawBtn = document.getElementById("draw");
let drawingColor = "#000000";
let draw = true;
let isMousePressDown = false;


function createGrid(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", () => {
            drawOrErase(square) })
        container.appendChild(square);
    }
}

createGrid(16, 16);

function drawOrErase(square) {
    if(isMousePressDown) {
        draw ? square.style.backgroundColor = drawingColor : square.style.backgroundColor = "#FFFFFF";     
    }
}

function getColorPickerValue(value) {
    drawingColor = value;
}

document.body.addEventListener("mousedown", () => {
    isMousePressDown = true;
})

document.body.addEventListener("mouseup", () => {
    isMousePressDown = false;
})

resetBtn.addEventListener("click", () => {
    for(let square of container.children) {
        square.style.backgroundColor = "#FFFFFF";
    }
})

eraserBtn.addEventListener("click", () => {
    draw = false;
})

drawBtn.addEventListener("click", () => {
    draw = true;
})


