var ground;
var player,obstacle;
var car;
var score=0;

function setup() {
  createCanvas(1300,400);
  ground = createSprite(650,200,2600,300);
  ground.shapeColor="brown";
  ground.x=ground.width/2;
  ground.velocityX=-5;
  player=createSprite(100,200,50,50);
}

function draw() {
  background(0);
  fill(255);
  textSize(50);
  text("score:"+score,900,100);
  if (ground.x<0){
  ground.x=ground.width/2;
  } 
  if (player.collide=car){
  player.bounceOff(car);
  player.velocityX=1;
  score=score-1;
  }

spawnCars();
  drawSprites();
}
function spawnCars(){
  if(frameCount%50===0) {
car=createSprite(1350,random(100,290),40,20);
car.velocityX=-3;
}
}