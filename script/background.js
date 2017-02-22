jQuery(document).ready(function($){

var windowXArray = [],
    windowYArray = [];

for (var i = 0; i < $(window).innerWidth(); i++) {
    windowXArray.push(i);
}

for (var i = 0; i < $(window).innerHeight(); i++) {
    windowYArray.push(i);
}

function randomPlacement(array) {
    var placement = array[Math.floor(Math.random()*array.length)];
    return placement;
}


var canvas = oCanvas.create({
   canvas: '#canvas',
   background: '#F2F2F2',
   fps: 50
});

setInterval(function(){

var rectangle = canvas.display.ellipse({
   x: randomPlacement(windowXArray),
   y: randomPlacement(windowYArray),
   origin: { x: 'center', y: 'center' },
   radius: 0,
   fill: '#000000',
   opacity: 1
});

canvas.addChild(rectangle);

rectangle.animate({
  radius: 5,
  opacity: 0
}, {
  duration: '600',
  easing: 'linear',
  callback: function () {
			this.remove();
		}
});

}, 500);

$(window).resize(function(){
canvas.width = $(window).innerWidth();
canvas.height = $(window).innerHeight();
});

$(window).resize();

});
