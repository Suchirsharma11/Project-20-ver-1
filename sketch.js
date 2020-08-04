var car, wall;
var speed, weight;






function setup() {
  createCanvas(1600,400);
  
  //giving random numbers to speed and weight
  speed = random(55,90);
  weight = random(400,1500);
  
  //making car sprite
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  
  //making wall sprite
  wall = createSprite(1500,200,60,200);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background("maroon");  
  
  
  
  
if(wall.x - car.x < (car.width + wall.width)/2){
  
  //stoping the car
  car.velocityX = 0;
  
  //giving the varable DEFORMATION
  var deformation = 0.5 * weight * speed * speed/22509;
  
  if(deformation > 180){
  car.shapeColor = color(255,0,0);
  }

  if(deformation < 180 && deformation > 100){
  car.shapeColor = color(230,230,0);
  }

  if(deformation < 100){
  car.shapeColor = color(0,255,0);
  }

}
  
  drawSprites();
}