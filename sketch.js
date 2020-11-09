
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground1,stone1,child1,tree1;
var m1,m2,m3,m4,m5,m6,m7;
var chain;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground1= new ground(500,990,1000,20);

  child1=new child(200,940,150,170);

  
  tree1=new tree(850,790);
 
  stone1=new stone(150,900,40);
  
  m1= new mangoes (810,650,50);
  m2= new mangoes (900,670,50);
  m3= new mangoes (870,730,50);
  m4= new mangoes (850,670,50);
  m5= new mangoes (790,750,50);
  m6= new mangoes (940,740,50);
  m7= new mangoes (790,700,50);

 
  chain =new sling(stone1.body,{x:150,y:900})

	Engine.run(engine);
  
}


function draw() {
 
  background("yellow");
  
  
  ground1.display();
  child1.display();
  stone1.display();
  tree1.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  chain.display();

  detectollision(stone1,m1);
  detectollision(stone1,m2);
  detectollision(stone1,m3);
  detectollision(stone1,m4);
  detectollision(stone1,m5);
  detectollision(stone1,m6);
  detectollision(stone1,m7);
  
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased (){
  chain.fly();
}

function keyPressed(){
  if(KeyCode===32){
    Matter.body.setPosition(stone1.body,{x:150,y:900})
    chain.attach(stone1.body)
  }
}
 

function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<lmango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

