const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thunderImage1, thunderImage2, thunderImage3, thunderImage4;

var engine,world;
var drops = [];
var rand;

var maxDrops = 100;
var thunderFrame = 0;

function preload()
{

thunderImage1 = loadImage("thunderbolt/1.png");
thunderImage2 = loadImage("thunderbolt/2.png");
thunderImage3 = loadImage("thunderbolt/3.png");
thunderImage4 = loadImage("thunderbolt/4.png");

}

function setup(){
createCanvas(400,700);     
engine = Engine.create();
world = engine.world;

umbrella = new Umbrella(200,500);

if(frameCount % 150 === 0)
{
for(var i = 0; i < maxDrops; i++)
  {
    drops.pussh(new createDrop(randome(0,400), random(0,400)));
  }

}
    
}

function draw(){
  
  Engine.update(engine);
  background(0);

  rand = Math.round(random(1,4));
  if(frameCount % 80 === 0)
  {
    thunderFrame = frameCount;
    thunder = createSprite(random(10,370), random(10,30),10,10);
    switch(rand)
    {
      case 1 : thunder.addImage(thunderImage1);
      break;
      case 2 : thunder.addImage(thunderImage2);
      break;
      case 3 : thunder.addImage(thunderImage3);
      break;
      case 4 : thunder.addImage(thunderImage4);
      break;
      default: break;

    }
      thunder.scale = random(0,3,0,6)
  }

  if(thunderFrame + 10 === frameCount && thunder)
  {
     thunder.destroy();
  }


  umbrella.display();
}   

