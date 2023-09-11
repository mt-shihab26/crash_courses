import { fabric } from "fabric";

export const initCanvas = (id: string) => {
    return new fabric.Canvas(id, {
        width: 500,
        height: 500,
        selection: false,
    });
};

export const setBackground = (url: string, canvas: fabric.Canvas) => {
    fabric.Image.fromURL(url, (image) => {
        canvas.backgroundImage = image;
        canvas.renderAll();
    });
};
