let canvas = document.getElementById('draw');
context = canvas.getContext("2d");


let clickX = new Array();
let clickY = new Array();
let clickDrag = new Array();
let paint;
let mouseX;
let mouseY;

var myColor = 'black';
var mySize = 5;

//розкоментуйте якщо використовуєте layout з практичною
//необхідно отримати додактовий offset
let offsetLeft = canvas.parentElement.parentElement.offsetLeft;
let offsetTop  = canvas.parentElement.parentElement.offsetTop;


canvas.addEventListener('mousedown',function (e){
   
/* версія для нашої розмітки*/
   mouseX = e.pageX - this.offsetLeft - offsetLeft;
   mouseY = e.pageY - this.offsetTop - offsetTop; 
   paint = true;
   addClick(mouseX, mouseY);
   redraw();
});
canvas.addEventListener('mousemove',function (e){
   if(paint){
       

/* версія для нашої розмітки
       
*/
       addClick(e.pageX - this.offsetLeft - offsetLeft, e.pageY - this.offsetTop - offsetTop, true);
       redraw();
   }
});
canvas.addEventListener('mouseup',function (e){
   paint = false;
});
canvas.addEventListener('mouseleave',function (e){
   paint = false;
});





function addClick(x, y, dragging)
{
   clickX.push(x);
   clickY.push(y);
   clickDrag.push(dragging);
}

function redraw(){
   context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

   context.strokeStyle = myColor;
   context.lineJoin = "round";
   context.lineWidth = mySize;

   for(var i=0; i < clickX.length; i++) {
       context.beginPath();
       if(clickDrag[i] && i){
           context.moveTo(clickX[i-1], clickY[i-1]);
       }else{
           context.moveTo(clickX[i]-1, clickY[i]);
       }
       context.lineTo(clickX[i], clickY[i]);
       context.closePath();
       context.stroke();
   }
}



//Очистить экран
function clearCanvas() {
    clickDrag = [];
    clickX = [];
    clickY = [];
    context.clearRect(0, 0, canvas.width, canvas.height);
}




document.getElementById('color').oninput = function() {
    myColor = this.value;
}
canvas.onmousedown = function(event) {
    canvas.onmousemove = function(event) {
        var x = event.offsetX;
        var y = event.offsetY;
        ctx.fillRect(x-5, y-5, 10, 10);
        ctx.fillStyle = myColor; // В html отрисуем выпадающую палитру.
        ctx.fill();
    }
    canvas.onmouseup = function(event) {
        // обнулим события на движение
        canvas.onmousemove  = null;
    }
}


document.getElementById('size').oninput = function() {
    mySize = this.value;
}   
    controls.brushSize = function(cx) {
  var select = elt("select");
  var sizes = [1, 2, 3, 5, 8, 12, 25, 35, 50, 75, 100];
  sizes.forEach(function(size) {
    select.appendChild(elt("option", {value: size},
                           size + " pixels"));
  });
  select.addEventListener("change", function() {
    cx.lineWidth = select.value;
  });
  return elt("span", null, "Brush size: ", select);
}




