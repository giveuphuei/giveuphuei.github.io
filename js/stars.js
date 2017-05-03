var starObj = function() {
	this.x;
	this.y;
	this.starNum;
	this.timer;

	this.xStep;
	this.yStep;
}

starObj.prototype.init = function() {
	this.x = Math.random() * 600 + 50;
	this.y = Math.random() * 300 + 50;
	this.starNum = Math.floor(Math.random()*7) ;
	this.xStep = Math.random() * 6 - 3; 
	this.yStep = Math.random() * 6 - 3; 
	this.timer = 0;
}
starObj.prototype.update = function(){
	this.x += this.xStep * deltaTime * 0.001 ;
	this.y += this.yStep * deltaTime * 0.001 ;
	if(this.x < 50 || this.x > 700 || this.y < 50 || this.y > 380 ){
		this.init();
		return;
	}
	this.timer += deltaTime ;
	if(this.timer > 50){
		this.starNum += 1;
		this.starNum %= 7;
		this.timer = 0;
	}
	if(this.starNum >= 7){
		this.starNum = 0;
	}	
}
starObj.prototype.draw = function() {
	ctx.save();
	//ctx.drawImage(starimg,sx,sy,swidth,sheight,x,y,width,height)
	ctx.globalAlpha = life;
	ctx.drawImage(starimg, this.starNum *7,0,7,7, this.x , this.y,7,7);
	ctx.restore();
}

function drawStars(){
	for(var i = 0 ; i < num ;i++){
		stars[i].update();
		stars[i].draw();
	}
}

function alivelife(){
	if(switchy){
		life += 0.03 * deltaTime * 0.05 ;
		if(life > 1){
			life = 1;
		}
			
	}
	else{
		life -= 0.03 * deltaTime * 0.05;
		if(life < 0){
			life = 0;
		}		 
	}
}