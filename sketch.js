var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var score = 0;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
 doorsGroup = new Group(); 
climbersGroup = new Group();
invisibleBlockGroup = new Group();
ghost = createSprite(300,300);
ghost.addImage("ghost",ghostImg);
ghost.scale=0.3


}

function draw() {
  background(200);
 


  if(gameState === "play"){
    textSize(30);
    fill ("yellow")
    text("score"+score,450,200,)

  if(tower.y > 400){
      tower.y = 300
    }
if(keyDown("left_arrow")){
  ghost.x=ghost.x -3
}

if(keyDown("right_arrow")){
  ghost.x=ghost.x +3
}

if(keyDown("space")){
  ghost.velocityY=-5;
}

ghost.velocityY=ghost.velocityY+0.8;
if(climbersGroup.isTouching(ghost)){
  ghost.velocityY=0;
  score=score+10;
}
if(invisibleBlockGroup.isTouching(ghost)){
  ghost.destroy();
gameState = "end"
}
    spawnDoors();
    drawSprites();
}

if(gameState === "end"){
  textSize(30);
  fill ("yellow")
  text("game over",300,300)
}
}
function spawnDoors(){
  if(frameCount%200 === 0){
    door = createSprite(300,-50);
    door.addImage("door",doorImg);
    door.velocityY=1;
  door.x =Math.round(random(150,400))
  door.lifetime =600;
  doorsGroup.add(door);

  climber = createSprite(300,-10);
  climber.addImage("climber",climberImg);
  climber.velocityY=1;
climber.x =door.x
climber.lifetime =600;
climbersGroup.add(climber);

ghost.depth=door.depth+1
ghost.depth +=1

invisibleBlock = createSprite(300,-10);
 // climber.addImage("climber",Img);
  invisibleBlock.velocityY=1;
invisibleBlock.x =door.x
invisibleBlock.lifetime =600;
invisibleBlockGroup.add(invisibleBlock);
invisibleBlock.debug = true;
invisibleBlock.height =2;
invisibleBlock.width= climber.width;
}
}

