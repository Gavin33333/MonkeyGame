var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime=0;

function preload(){
  
   monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup(){
  
createCanvas(600,600);  
  
monkey = createSprite(300,300)
monkey.addAnimation("monkey_running", monkey)
  
ground = createSprite(200,180,400,20)  
ground.velocityX=-4;
  ground.x = ground.width /2;
  
 
} 

function draw(){
 
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
 }   

  var survivalTime=0;
  
  stroke("black");
  textsize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  spawnObstacles();
  
  spawnBananas();
  
 drawSprites(); 
}


function spawnBananas(){
 if (frameCount % 80 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
   
    
   banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
   
    banana.velocityX = -3;
               
    banana.lifetime = 200;
   
    FoodGroup.add(banana);
 }
}


function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
   obstacle.addImage(obstacleImage);
   
   
   
             
    obstacle.scale = 0.5;
    obstacle.lifetime = 600;
   
   
    obstaclesGroup.add(obstacle);
 }
}
