var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	boxposition = width/2-100;
	boxy = 610;
	rect1Sprite=createSprite(boxposition,boxy,20,100);
	rect1Sprite.shapeColor=color("blue");
	rect1body = Bodies.rectangle(boxposition+20,boxy,20,100,{isStatic:true});
	World.add(world,rect1body);

	rect2Sprite=createSprite(boxposition+100,boxy+40,200,20);
	rect2Sprite.shapeColor=color("blue");
	rect2body = Bodies.rectangle(boxposition+100,boxy+25,200,20,{isStatic:true});
	World.add(world,rect2body);

	rect3Sprite=createSprite(boxposition+200,boxy,20,100);
	rect3Sprite.shapeColor=color("blue");
	rect3body = Bodies.rectangle(boxposition+180,boxy,20,100,{isStatic:true});
	World.add(world,rect3body);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x ;
  packageSprite.y = packageBody.position.y ;
  
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false);
    
    }
}



