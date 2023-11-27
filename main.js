
var canvas = new fabric.Canvas('myCanvas');
ball_y=450;
ball_x=350;
hole_y=0;
hole_x=350;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("football.png", function(Img) {
	ball_obj = Img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set({
	top:ball_y,
	left:ball_x
	});
	canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==350)&&(ball_y<=50)){
		canvas.remove(ball_obj);
		console.log("You have Hit the Goal!!!");
		document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
	    document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >=5)
		{
			
		}
	}
    //Complete the code for the "down()" function
	function down()
	{
		
		if(ball_y <=450)
		{
			
		}
	}







	

	function left()
	{
		if(ball_x >5)
		{
		}
	}

    //Complete the code for the "right()" function
	function right()
	{
		if(ball_x <=1050)
		{
			
		}
		






		
	}
	
}

