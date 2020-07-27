var ball=document.getElementById("ball");
var obj=document.getElementById("obj");

function go()
{
	 if(ball.classList != "animate")
	   { ball.classList.add("animate");}

	setTimeout(function(){
		ball.classList.remove("animate");
	},500)
}

var gameover=setInterval(function(){

	var ballTop=parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
	var objLeft=parseInt(window.getComputedStyle(obj).getPropertyValue("left"));

	if(ballTop>=450 && objLeft>=50 && objLeft<=150){
		
		obj.style.animation="none";
		obj.style.display="none";
        
		alert("Game Over!\nReload to play!");
	}
},10)

