class Umbrella 
{

constructor(x,y)
{
  var options = {
      isStatic : true,
  }  
  this.image = loadImage("Walking Frame/walking_1.png", "walking Frame/walking_2.png", "walking Frame/walking_3.png", "walking Frame/ walking_4.png", "walking Frame/walking_5.png", "walking Frame/walking_6.png", "walking Frame/walking_7.png", "walking Frame/walking_8.png" );
  this.umbrella = Boldies.circle(x,y,50,options);
  this.radius = 50;
  World.add(world, this.umbrella)
}

display(){
    var pos = this.umbrella.position;
    imageMode(CENTER);
    this.image(this.image.pos.x,pos.y + 70,300,300);
}

}