var box1Object;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	

}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

 
  log1=new Log(1100,385,5,3)
  //log2=new Log(680,337,100,5)
 // log3=new Log(595,385,5,200)
    ground1= new Ground(270,700,1800,20);

   ground2 = new Ground(1300,700,5,670)
   box1 = new Box(70,250);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  text("x:"+mouseX,25,25);
  text("y:"+mouseY,25,50);
 
  
  fill("blue");
  ground1.display();
  box1.display();
 
  ground2.display();
   log1.display();
    //log2.display();
    //log3.display();
   
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){

	Matter.Body.applyForce(box1.body,box1.body.position,{x:85,y:-85});
}

}





