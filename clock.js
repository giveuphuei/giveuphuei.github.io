var dom = document.getElementById("mycan");
var ctx =  dom.getContext("2d");
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var r = width / 2;
var scale = width / 200 ;
function drawBackground() {
	//绘制表盘的外边缘
	ctx.save();
	ctx.translate(r,r);
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.lineWidth = 10* scale;
	ctx.arc( 0, 0 , r - 5 , 0 , 2*Math.PI , false );
	ctx.stroke();
	
	//绘制时钟的小时数字
	var hourNumbers = [ 3,4,5,6,7,8,9,10,11,12,1,2];
	ctx.font = "16px Arial";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	hourNumbers.forEach( function(number,i) {
		var rad = 2*Math.PI/12 * i ;
		var x = Math.cos( rad ) * ( r -30);
		var y = Math.sin( rad ) * ( r -30);
 		ctx.fillText(number, x, y);
	});
	//绘制时钟的刻度
	for(i=0;i<60;i++){
		var rad = 2*Math.PI/60*i;
		var x = Math.cos( rad ) * ( r -15);
		var y = Math.sin( rad ) * ( r -15);
		if( i % 5 == 0 ){
			ctx.beginPath();
			ctx.fillStyle = "black";
			ctx.arc(x,y,2,0,2*Math.PI,false);
			ctx.fill();
		}
		else{
			ctx.beginPath();
			ctx.fillStyle = "grey";
			ctx.arc(x,y,2,0,2*Math.PI,false);
			ctx.fill();
		}	
	}
}

function drawHour(hour,minute,second){
	ctx.save() ;
	var rad = Math.PI/6*hour + Math.PI / 360 * minute + Math.PI / 21600 * second ;
	ctx.rotate(rad);
	ctx.beginPath();
	ctx.lineWidth = 4;
	ctx.lineCap = "round";
	ctx.moveTo(0,5);
	ctx.lineTo(0,-r / 2 +10);
	ctx.stroke();
	ctx.restore(); 
}

function drawMinute(minute,second){
	ctx.save();
	var rad = Math.PI / 30 * minute + Math.PI / 1800 * second ;
	ctx.rotate(rad);
	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.lineCap = "round";
	ctx.moveTo(0,8);
	ctx.lineTo(0,-r / 2);
	ctx.stroke();
	ctx.restore();
}

function drawSecond(second,ms){
	ctx.save();
	var rad = 2 * Math.PI / 60 * second + 2 * Math.PI / 60000 * ms;
	ctx.rotate(rad);
	ctx.beginPath();
	ctx.fillStyle = "red";
	ctx.moveTo(2,15);
	ctx.lineTo(-2,15);
	ctx.lineTo(-1,-r / 2 -30);
	ctx.lineTo(1,-r / 2 -30);
	ctx.fill();
	ctx.restore();
}

function drawDot(){
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.arc(0,0,2.5,0,2*Math.PI,false);
	ctx.fill();
}
function clock(){
	ctx.clearRect(0,0,width,height);
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second  = now.getSeconds();
	var ms = now.getMilliseconds();
	drawBackground();
	drawDot();		
	drawHour(hour,minute,second);
	drawMinute(minute,second);
	drawSecond(second,ms);	
	ctx.restore();

}
clock();
setInterval(clock,"1000");
