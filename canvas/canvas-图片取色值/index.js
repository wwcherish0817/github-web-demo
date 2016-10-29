/**
 * Created by ww on 2016/10/29.
 */

var mycanvas = document.getElementById("mycanvas");
var context = mycanvas.getContext("2d");

var image = new Image();
image.src = "1.jpg";
image.onload =function(){
    context.drawImage(image, 0, 0, 500, 500);
}

var colorbg = document.getElementById("colorbg");
var showColorNum = document.getElementById("showColorNum");
mycanvas.addEventListener("mousedown", function(e){
    toNum(e);
},false);
mycanvas.addEventListener('mousemove',  function(e){
 },false);
mycanvas.addEventListener('mouseup', function(e){

 }, false);

function toNum(e){
    var imageData = context.getImageData(e.clientX, e.clientY, 1, 1);
    var pixelRed = imageData.data[0];
    var pixelGreen = imageData.data[1];
    var pixelBlue = imageData.data[2];
    var pixelAlpha = imageData.data[3];
    var str = "rgb("+pixelRed+","+pixelGreen+","+ pixelBlue+")";
    colorbg.style.background = str;
    showColorNum.innerHTML="颜色显示在红框框里,您取的颜色值是:"+str;
}



