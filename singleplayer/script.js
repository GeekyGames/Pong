//Game Vars
var mouse = {
	x: 400,
}
var paddle = {
	x: 250,
	y: 620,
	width: 75,
	height: 10,
	color: "blue",
	draw: function(){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x,this.y,this.width,this.height);
	},
	update: function(){
		this.x = mouse.x;
	}
}
var enemypaddle = {
	x: 250,
	y: 7,
	width: 75,
	height: 10,
	color: "red",
	draw: function(){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x,this.y,this.width,this.height);
	},
	update: function(){
		this.x = ball.x - 37;
	}
}
var ball = {
	x: 50,
	y: 50,
	radius: 6,
	color: "white",
	vx: 150,
	vy: 150,
	draw: function(){
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
		ctx.fillStyle = this.color;
		ctx.fill();
	},
	update: function(){
		this.x += this.vx / Game.FPS;
		this.y += this.vy / Game.FPS;
		//collision detection
		if(ball.x + ball.radius > canvas.width){
			ball.vx = -ball.vx;
		}
		if(ball.x - ball.radius < 0){
			ball.vx = -ball.vx;
		}
		if(ball.y + ball.radius > canvas.height){
			ball.vy = -ball.vy;
		}
		if(ball.y - ball.radius < 0){
			ball.vy = -ball.vy;
		}
		//check to see if it has hit paddles
		if(ball.x - ball.radius > paddle.x && ball.x + ball.radius < paddle.x + paddle.width && ball.y + ball.radius > paddle.y){
			ball.vy = -ball.vy;
		}
	}
}
function powerup(type){
	this.x = null,
	this.y = null,
	this.type = type,
	this.radius = 4,
	this.vx = null,
	this.vy = null,
	this.draw = function(){
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
		ctx.fillStyle = this.color;
		ctx.fill();
	},
	this.update = function(){
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
var powerup_types = ["big", "small", "bigBall", "smallBall", "iceBall", "fireBall"];//no multiball, thats too hard to implement here
var powerups = [];
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();
var Game = {
	FPS: 60,
	Tick: function(){
		Game.Update();
		Game.Draw();
	},
	Draw: function(){
		paddle.draw();
		enemypaddle.draw();
		ball.draw();
		for(var x in powerups){
			powerups[x].draw();
		}
	},
	Update: function(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		paddle.update();
		enemypaddle.update();
		ball.update();
		for(var x in powerups){
			powerups[x].update();
		}
	},
	Random: function(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
};
setInterval(Game.Tick,1000/Game.FPS);
document.onmousemove = function(e){
	e = e || window.event;
	mouse.x = e.pageX - rect.left;
};
