
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dustbin;
var paper;
var ground;
var dustbin2;
var dustbin3;
// function preload()
// {
	
// }

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  //dustbin = new Dustbin(130,50,30,150);
 // dustbin = new Dustbin(75,75,75,75,90); // working perfectly
 dustbin = new Dustbin(130,50,30,150,0);
  dustbin2 = new Dustbin (200,30,100,30,0);
  dustbin3 = new Dustbin (270,50,30,150,0);
  paper = new Paper(300,330);
  ground = new Ground (200, 380,400,20);
	
	Engine.run(engine);
	
  

}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

 //This statement will draw paper on screen
  paper.display();
  ground.display();
  dustbin.display();
   dustbin2.display();
   dustbin3.display();
 
  // for (var i=25; i <=350 ; i=i+1) {
  //   dustbin = new Dustbin(185,i,75,10,90);
  //   dustbin2 = new Dustbin (200,i,100,30);
    
  // }
  

  // drawSprites();

  
 
}

function keyPressed (){
  if (keyCode === UP_ARROW){
  Matter.Body.applyforce(paper.body,paper.body.position,{x:85,y:85})
  }
   }


