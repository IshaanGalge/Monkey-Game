
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage ,ground;
var FoodGroup, obstacleGroup, bananaGroup
var time=15
var gamestate=1
var back

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600 ,600)
  monkey=createSprite(50 ,473 ,0 ,0)
  monkey.addAnimation("money_run" ,monkey_running)
  monkey.scale=0.08
 
  ground=createSprite(200 ,500 ,1200 ,10)
    obstacleGroup=new Group()    
 bananaGroup=new Group()
  
}


function draw() {
  monkey.collide(ground)
  
  background("white")
if (gamestate===1) {
  text("Survival Time : "+time ,300 ,100)
  if (frameCount%40===0) {
    time=time-1
  }
  if (monkey.isTouching(bananaGroup)) {
    time=time+3
    bananaGroup.destroyEach()
  }
  
  food();
  obstacl()
  if (keyDown("space")&&(monkey.y>=200)){
    monkey.velocityY=-10
    
  }
  if (monkey.isTouching(obstacleGroup)||time===0) {
    gamestate=0
  }
   ground.velocityX=-4 
  if (ground.x < 0){
    ground.x=ground.width/2
  }
 monkey.velocityY=monkey.velocityY+0.8
  drawSprites();
  }
  if (gamestate===0) {
    background("black")
    fill("yellow")
    textSize(20)
    text("GAME_OVER" ,250 ,300)
    text("Press R to Restart " ,250 ,400)
    if (keyDown("r")) {
      gamestate=1
      time=15
    }
  }
  

}
function food() {
if (frameCount%120===0){
  
  banana=createSprite(610,20000000 ,0 ,0)
  banana.velocityX=-5
  banana.y=(random(150,400))
  banana.addImage("banana",bananaImage)
  banana.scale=0.1
   bananaGroup.add(banana)
    banana.lifetime=400

}
}


function obstacl() {
if (frameCount%140===0){
  
  obstacle=createSprite(610,477 ,0 ,0)
  obstacle.velocityX=-6
  obstacle.addImage("obs",obstaceImage)
  obstacle.scale=0.1
  obstacleGroup.add(obstacle)
  obstacle.lifetime=400
}
}



