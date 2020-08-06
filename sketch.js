var dustbin1,dustbin2,dustbin3;
var ground,paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload() {
 
}

function setup() {
  createCanvas(800, 500);
  
	
	engine = Engine.create();
	world = engine.world;

paper = new Paper(700,400,30,30) 

ground = new Ground(400,height,800,10);

dustbin1 = new Dustbin(300,450,10,90);
dustbin2 = new Dustbin(100,450,10,90);
dustbin3 = new Dustbin(200,495,200,20);

sling = new Slingshot(paper.body,{x:400,y:200});

//dustbinAnimation = new Dustbin(200,400,200,200)
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  //dustbinAnimation.display();
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  sling.display();
   
 drawSprites();
}

/*function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body, paper1.body.position,{x:-50,y:-35});
	}
}*/


function mouseDragged(){
  Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY})
  }
  
  function mouseReleased(){
      sling.fly()
  }
