var bullet,wall,thickness
var speed,weight



function setup() {

  
  createCanvas(1600,400);
 
 speed=Math.round(random(223,321))
 weight=Math.round(random(30,52))
 thickness=Math.round(random(22,83))


  bullet = createSprite(50,200,35,15)
  bullet.shapeColor = "white"
  wall = createSprite(1000,200,60,300)
  bullet.velocityX=speed
  wall.shapeColor = "grey"
}

function draw() {
  background(0); 
function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true
}
return false

}

if(hasCollided(bullet,wall)){
  bullet.velocityX=0
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);


  if (damage > 10){

    wall.shapeColor=color(255,0,0)
  }

  if (damage < 10){

    wall.shapeColor=color(255,0,0)
  }

}





  
  
  



drawSprites();

  }


  
