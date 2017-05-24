var dom;
var ctx;
var w;
var h;
var num = 50;
var stars = [];
var lastTime;
var deltaTime;
var switchy = false ;
var life = 0 ;
var skyimg = new Image();
var starimg = new Image();
function init(){
	dom = document.getElementById("canvas");
	ctx = dom.getContext("2d");
	w = dom.width;
	h = dom.height;
	skyimg.src = "images/starsky.jpg";
	starimg.src = "images/stars.png";
	for(var i = 0; i < num; i++){
		var obj = new starObj();
		stars.push(obj);
		stars[i].init();
	}
	document.addEventListener('mousemove',mousemove,false);
	lastTime = Date.now();
	gameloop();
	
}

document.body.onload = init;

function gameloop(){
	window.requestAnimFrame(gameloop);

	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now ;
	alivelife();
	drawBackground();
	drawGirl();
	drawStars();
}

function drawBackground(){
	ctx.fillStyle = "#000";
	ctx.fillRect(0,0,w,h);

}

function drawGirl(){
	ctx.drawImage(skyimg,5,5,w-10,h-10);
}

function mousemove(e){
	if(e.offsetX || e.layerX){
		var px = e.offsetX == undefined?e.layerX:e.offsetX;
		var py = e.offsetY == undefined?e.layerY:e.offsetY;
	}
	if(px > 5 && px < w-10 && py > 5 && py < h-10){
		switchy = true;
	}
	else{
		switchy = false;
	}
}