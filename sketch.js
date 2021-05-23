const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject, dustbinObject, dustbinObject2, dustbinObject3, ground, paper, dustbinImage, binImage, perImage;

function preload()
{
	binImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);

	dustbinImage = createSprite(1000, 600, 200, 25);
	dustbinImage.addImage(binImage);
	dustbinImage.scale = 0.45;

	engine = Engine.create();
	world = engine.world;

	paperObject = new Paper(200, 350, 50);
	dustbinObject = new Dustbin(1000, 665, 100, 15);
	dustbinObject2 = new Dustbin(1050, 600, 15, 150);
	dustbinObject3 = new Dustbin(950, 600, 15, 150)
	ground = new Ground(600, 690, 1200, 30);
	launcher = new Launcher(paperObject.body,{x: 200, y: 350});

	Engine.run(engine);
}


function draw() 
{
  Engine.update(engine);
  rectMode(CENTER);
  background("pink");

  //console.log(paperObject.body.position.y);

  paperObject.display();
  dustbinObject.display();
  dustbinObject2.display();
  dustbinObject3.display();
  ground.display();
  launcher.display()
  
  drawSprites();
}

function mouseDragged()
{
    Matter.Body.setPosition(paperObject.body,{x: mouseX, y: mouseY});
}

function mouseReleased()
{
    launcher.fly();
}