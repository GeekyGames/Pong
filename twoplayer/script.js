var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var player1 = {
	x: 420,
	y: 10,
	width: 75,
	height: 10,
	draw: function () {
		ctx.fillStyle = "blue";
		ctx.fillRect(this.x,this.y,this.width,this.height);
	},
	update = function () {
		
	}
}
var player2 = {
	x: 420,
	y: 620,
	width: 75,
	height: 10,
	draw = function () {
		ctx.fillStyle = "red";
		ctx.fillRect(this.x,this.y,this.width,this.height);
	},
	update = function () {
		
	}
}
var ball = {
	x: 100,
	y: 100,
	vx: 20,
	vy: 20,
	radius: 6,
	color: "white",
	draw = function () {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fill();
	},
	update = function () {
		
	}
}
var Game = {
	FPS: 20,
	Tick: function(){
		Game.Update();
		Game.Draw();
	},
	Draw: function(){
		player1.draw();
		player2.draw();
		ball.draw();
	},
	Update: function(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		player1.update();
		player2.update();
		ball.update();
	},
	Random: function(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}//lol this was the biggest problem; missing bracket :P
setInterval(Game.Tick,1000/Game.FPS);
document.onkeydown = function(e){
	e = e || window.event;
	c = e.keyCode;
};
document.onkeyup = function(e){
	e = e || window.event;
	c = e.keyCode;
};