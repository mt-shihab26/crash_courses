import { fabric } from "fabric";
import { initCanvas, setBackground } from "./func";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/`
  <div class="flex flex-col justify-center h-screen items-center gap-2">
    <div class="flex gap-2 items-start">
        <button id="togglePan" class="btn btn-primary">Toggle Pan</button>
        <button id="toggleDrawing" class="btn btn-primary">Toggle Drawing</button>
    </div>
    <canvas id="canvas"></canvas>
  </div>
`;

const setPanEvents = (canvas: fabric.Canvas) => {
    canvas.on("mouse:move", (event) => {
        if (mousePressed) {
            if (mousePressed && currentMode === modes.pen) {
                const mEvent = event.e;

                const delta = new fabric.Point(
                    mEvent.movementX,
                    mEvent.movementY
                );

                canvas.relativePan(delta);

                canvas.setCursor("grab");

                canvas.renderAll();
            }
            if (currentMode === modes.drawing) {
                canvas.isDrawingMode = true;
                canvas.renderAll();
            } else {
                canvas.isDrawingMode = false;
                canvas.renderAll();
            }
        }
    });

    canvas.on("mouse:down", (event) => {
        mousePressed = true;

        if (currentMode === modes.pen) {
            canvas.setCursor("grab");
            canvas.renderAll();
        }
    });

    canvas.on("mouse:up", (event) => {
        mousePressed = false;
        console.log(canvas.getObjects());
    });
};

const canvas = initCanvas("canvas");

setBackground(
    "https://cdn.pixabay.com/photo/2017/03/17/19/37/sky-2152463_960_720.jpg",
    canvas
);

const modes = {
    pen: "pen",
    drawing: "drawing",
};

let mousePressed = false;
let currentMode = "";

document.querySelector("#togglePan")?.addEventListener("click", () => {
    currentMode = currentMode === modes.pen ? "" : modes.pen;
});

document.querySelector("#toggleDrawing")?.addEventListener("click", () => {
    if (currentMode === modes.drawing) {
        currentMode = "";
    } else {
        currentMode = modes.drawing;

        // canvas.freeDrawingBrush = new fabric.CircleBrush(canvas);

        // @ts-ignore
        canvas.freeDrawingBrush = new fabric.SprayBrush(canvas);
        canvas.freeDrawingBrush.color = "red";
        canvas.freeDrawingBrush.width = 5;
    }
});

setPanEvents(canvas);
