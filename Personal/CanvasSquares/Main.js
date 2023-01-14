let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
canvas.style.height = canvas.height / window.devicePixelRatio + "px";
canvas.style.width = canvas.width / window.devicePixelRatio + "px";

"use strict";

let timePassed = 0;
let secondsPassed = 0;
let oldTimeStamp = 0;
let fps
let gravity = 0.50
let candiesArray = [];

function Candy(x, y, yv, w, h, b) {
    this.x = x;
    this.y = y;
    this.yv = yv;
    this.w = w;
    this.h = h;
    this.b = b;

    let color = "#" + Math.floor(Math.random()*16777215).toString(16);
    if (color !== "#ffffff") // make sure color is not same as background
        this.color = color;
    else
        this.color = "#e9e9e9";
}

// Listen to the onLoad event
window.onload = init;

// Trigger init function when the page has loaded
function init() {
    for (let i = 0; i < 192; i ++) {
        candiesArray.push(new Candy(i * 10.0, 0, 0.0, 10, 10, Math.random() * (0.5 - 0.45) + 0.45))
    }
    // Request an animation frame for the first time
    // The gameLoop() function will be called as a callback of this request
    window.requestAnimationFrame(gameLoop);
}

function spawn() {
    candiesArray.push(new Candy(Math.floor(Math.random() * 191) * 10, 0, 0, 10, 10, Math.random() * (0.5 - 0.45) + 0.45));
    console.log(context.getImageData(5, canvas.height - 5, 1, 1).data);
}

function gameLoop(timeStamp) {
    // Calculate how much time has passed
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    // Calculate fps
    fps = Math.round(1 / secondsPassed);

    // Update game objects
    update(secondsPassed);

    // Perform the drawing operation
    draw();

    window.requestAnimationFrame(gameLoop);
}



//Crafty.init(200, 200);
//
// var dim1 = {x: 5, y: 5, w: 50, h: 50}
// var dim2 = {x: 20, y: 10, w: 60, h: 40}
//
// var rect1 = Crafty.e("2D, Canvas, Color").attr(dim1).color("red");
//
// var rect2 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway").fourway(2).attr(dim2).color("blue");
//
// rect2.bind("EnterFrame", function () {
//     if (rect1.x < rect2.x + rect2.w &&
//         rect1.x + rect1.w > rect2.x &&
//         rect1.y < rect2.y + rect2.h &&
//         rect1.h + rect1.y > rect2.y) {
//         // collision detected!
//         this.color("green");
//     } else {
//         // no collision
//         this.color("blue");
//     }
// });
function update(secondsPassed) {
    timePassed += secondsPassed;

    for (let i = 0; i < candiesArray.length; i++) {
        let c = candiesArray[i];
        let c2 = candiesArray[i + 1]
        let h = canvas.height;
        

        if (c.y + c.h >= h) {
            c.yv *= -c.b;
            c.y = h - c.h;
        }

        if (c.yv < 0.01 && c.yv > -0.01) { // remove small calculations I think
            c.yv = 0.0
        }

        c.yv += gravity
        c.y += c.yv;

    }
}

function draw() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < candiesArray.length; i++) {
        let c = candiesArray[i];
        context.beginPath();
        context.fillRect(c.x, c.y, c.w, c.h);
        context.fillStyle = c.color;
        context.fill();
    }
}

