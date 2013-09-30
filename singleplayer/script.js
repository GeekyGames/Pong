//Game Vars
var paddle = {
	x: null,
	y: null,
	width: null,
	height: null,
	color: "blue",
	draw: function(){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x,this.y,this.width,this.height);
	},
	update: function(){
		
	}
}
var ball = {
	x: null,
	y: null,
	radius: 4,
	color: "white",
	ax: null,
	ay: null,
	vx: null,
	vy: null,
	draw: function(){
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
		ctx.fillStyle = this.color;
		ctx.fill();
	},
	update: function(){
		this.ax += this.vx / Game.FPS;
		this.ay += this.vy / Game.FPS;
		this.x += this.vx / Game.FPS;
		this.y += this.vy / Game.FPS;
	}
}
function powerup(type){
	this.x = null,
	this.y = null,
	this.type = type,
	this.radius = 4,
	this.ax = null,
	this.ay = null,
	this.vx = null,
	this.vy = null,
	this.draw = function(){
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
		ctx.fillStyle = this.color;
		ctx.fill();
	},
	this.update = function(){
		this.ax += this.vx / Game.FPS;
		this.ay += this.vy / Game.FPS;
		this.x += this.vx / Game.FPS;
		this.y += this.vy / Game.FPS;
	}
	switch(type){
		case "big":
			this.color = "red";
			this.effect = function(){
				switch(paddle.width){
					case "#"://small
						break;
					case "#"://normal
						break;
					case "#"://big already
						break;
				}
			};
			break;
	//and so on...
	}
}
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var Game = {
	FPS: 20,
	Tick: function(){
		Game.Update();
		Game.Draw();
	},
	Draw: function(){
		
	},
	Update: function(){
		
	},
	Random: function(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
};
setInterval(Game.Tick,1000/Game.FPS);
document.onkeydown = function(e){
	e = e || window.event;
	c = e.keyCode;
};
document.onkeyup = function(e){
	e = e || window.event;
	c = e.keyCode;
};