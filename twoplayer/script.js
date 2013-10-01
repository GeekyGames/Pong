var mouse = {
	x: 0,
	y: 0
}
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();
var Game = {
	FPS: 20,
	Tick: function(){
		Game.Update();
		Game.Draw();
	},
	Draw: function(){
		player1.draw();
		player2.draw();
	},
	Update: function(){
		player1.update();
		player2.update();
	},
	Distance: function(x,y,x2,y2){
		var answer = (x2 - x)*(x2 - x) + (y2 - y)*(y2 - y);
		answer = Math.round(Math.sqrt(answer));
		return answer;
	},
	player1 {
		alive: true,
		x: 200,
		y: null,
		width: null,
		height: null,
		draw: function () {
			ctx.color = "blue";
			ctx.fillRect(this.x,this.y,this.width,this.height);
		},
		update = function () {
			this.x += this.vx / FPS;
		}
	},
	player2 {
		alive: true,
		x: 200,
		y: null,
		width: null,
		height: null,
		draw = function () {
			ctx.color = "red";
			ctx.fillRect(this.x,this.y,this.width,this.height);
		},
		update = function () {
			this.x += this.vx / FPS;
		}
	},
	ball {
		x: null,
		y: null,
		vx: null,
		vy: null,
		radius: 20,
		color: "purple",
		draw = function () {
			ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		},
		update = function () {
			this.x += this.vx / FPS;
			this.y += this.vy / FPS;
		}
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
document.onmousemove = function mouseMove(e){
	e = e || window.event;
	mouse.x = e.pageX - rect.left || e.clientX - rect.left;
	mouse.y = e.pageY - rect.top || e.clientY - rect.top;
};
document.onmousedown = function mouseDown(e){
	e = e || window.event;
	mouse.down = true;
};
document.onmouseup = function mouseUp(e){
	e = e || window.event;
	mouse.down = false;
};