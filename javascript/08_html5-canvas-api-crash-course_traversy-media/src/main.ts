import "./style.css";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// fillRect()
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150 , 100);
ctx.fillStyle = "green";
ctx.fillRect(100, 20, 150 , 100);


// strokeRect()
ctx.lineWidth = 10;
ctx.strokeStyle = "blue";
ctx.strokeRect(100, 200, 150, 100);

// clearRect()
ctx.clearRect(25, 25, 100, 90);

// fillText()
ctx.font = "30px Arial";
ctx.fillStyle = "purple";
ctx.fillText("Hello", 300, 220);

// strokeText()
ctx.lineWidth = 1;
ctx.strokeStyle = "red";
ctx.strokeText("Hello", 300, 280);

