canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var last_x, last_y;
var mouseEvent = "";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {

    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;

        console.log("last positions of x- and y-coordinates: x = " + last_x + ", y = " + last_y);
        console.log("current position of x- and y- coordinates: x = " + current_x + ", y = " + current_y);
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);

        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;
}