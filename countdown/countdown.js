var window_width = 1200 ;
var window_height = 500 ; 
var radius = 6;
var margin_left = 250;
var margin_top = 40;

const endTime = new Date(2017,4,18,23,22,0);
var curShowTimeseconds = 0 ;

const colors = ["#00ff00","#4a86e8","#9900ff","#ff00ff","#a61c00","#45818e","#db4141","#f6b26b","3399cc","00cc00"]
var balls = [];
window.onload = function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	canvas.width = window_width;
	canvas.height = window_height;
	
	curShowTimeseconds = getCurSeconds();
	setInterval(
		function(){
		render(ctx);
		update();
	},
	100);	
}
function update(){
	var nextShowTimeSeconds = getCurSeconds();
	var nextHours = parseInt(nextShowTimeSeconds / 3600) ;
	var nextMinutes = parseInt((nextShowTimeSeconds - nextHours *3600) / 60);
	var nextSeconds = parseInt(nextShowTimeSeconds % 60); 

	var curHours = parseInt(curShowTimeseconds / 3600) ;
	var curMinutes = parseInt((curShowTimeseconds - curHours *3600) / 60);
	var curSeconds = parseInt(curShowTimeseconds % 60); 

	if(nextShowTimeSeconds != curShowTimeseconds){
		if(parseInt(nextHours/10) != parseInt(curHours/10) ){
			addBalls(margin_left,margin_top,parseInt(curHours/10));
		}
		if(parseInt(nextHours%10) != parseInt(curHours%10) ){
			addBalls(margin_left+15*(radius+1),margin_top,parseInt(curHours%10));
		}
		if(parseInt(nextMinutes/10) != parseInt(curMinutes/10) ){
			addBalls(margin_left+39*(radius+1),margin_top,parseInt(curMinutes/10));
		}
		if(parseInt(nextMinutes%10) != parseInt(curMinutes%10) ){
			addBalls(margin_left+55*(radius+1),margin_top,parseInt(curMinutes%10));
		}
		if(parseInt(nextSeconds/10) != parseInt(curSeconds/10) ){
			addBalls(margin_left+79*(radius+1),margin_top,parseInt(curSeconds/10));
		}
		if(parseInt(nextSeconds%10) != parseInt(curSeconds%10) ){
			addBalls(margin_left+95*(radius+1),margin_top,parseInt(curSeconds%10));
		}

		curShowTimeseconds = nextShowTimeSeconds;
	}

	updateballs();
}


function addBalls(x,y,num){
	for(var i=0; i<digit[num].length;i++){
		for(var j=0;j<digit[num][i].length;j++){
			if(digit[num][i][j] == 1){
				var aball = {
					x:x+2*j*(radius+1)+(radius+1),
					y:y+2*i*(radius+1)+(radius+1),
					r:radius ,
					g:4,
					vx:Math.pow(-1,Math.ceil(Math.random()*1000)) * 6,
					vy:-5 ,
					color:colors[Math.floor(Math.random()*colors.length)]		
					}
				balls.push(aball)							
			}
		}
	}
}

function updateballs(){
	for(var i = 0; i < balls.length ; i++){
		balls[i].x += balls[i].vx ;
   		balls[i].y += balls[i].vy;
    	balls[i].vy += balls[i].g ;
    	//alert(Math.pow(-1,Math.floor(1000*Math.random())) * 4)
    	if(balls[i].y >= window_height-radius){
    	balls[i].y = window_height-radius ;
    	balls[i].vy = -balls[i].vy * 0.5 ;
    	}
	}	  
}

function  getCurSeconds(){
	var now = new Date();
	var ret = endTime.getTime() - now.getTime() ;
	ret = Math.round(ret/1000);
	return ret >=0 ? ret : 0;
}

function render(ctx){
	ctx.clearRect(0,0,window_width,window_height);
	var hours = parseInt(curShowTimeseconds / 3600) ;
	var minutes = parseInt((curShowTimeseconds - hours *3600) / 60);
	var seconds = parseInt(curShowTimeseconds % 60); 
	renderDigit(margin_left,margin_top,parseInt(hours/10),ctx);
	renderDigit(margin_left+15*(radius+1),margin_top,parseInt(hours%10),ctx);
	renderDigit(margin_left+30*(radius+1),margin_top,10,ctx);
	renderDigit(margin_left+39*(radius+1),margin_top,parseInt(minutes/10),ctx);
	renderDigit(margin_left+55*(radius+1),margin_top,parseInt(minutes%10),ctx);
	renderDigit(margin_left+70*(radius+1),margin_top,10,ctx);
	renderDigit(margin_left+79*(radius+1),margin_top,parseInt(seconds/10),ctx);
	renderDigit(margin_left+95*(radius+1),margin_top,parseInt(seconds%10),ctx);
	for(var i = 0; i < balls.length ; i++){
		ctx.fillStyle = balls[i].color ;
		ctx.beginPath();
		ctx.arc(balls[i].x,balls[i].y,radius,0,2*Math.PI,false);
		ctx.closePath();
		ctx.fill();
	}
}

function renderDigit(x,y,num,ctx){
	ctx.fillStyle = "lightblue";
	for(var i=0; i<digit[num].length;i++){
		//alert("ok");
		for(var j=0;j<digit[num][i].length;j++){
			//alert(digit[num][i].length);
			if(digit[num][i][j] == 1){
				ctx.beginPath();
				ctx.arc(x+2*j*(radius+1)+(radius+1),y+2*i*(radius+1)+(radius+1),radius,0,2*Math.PI,false);
				ctx.closePath();
				ctx.fill();	
			}
		}
	}
}