var seaImg
var shipImg1
var sea
var ship


function preload(){
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
 
  
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(100,200,30,30);
  sea.addImage(seaImg);
  ship = createSprite(130,200,30,30);
  ship.addAnimation("Barco",shipImg1);
  ship.scale = 0.4
}

function draw() {
  background("blue");
    drawSprites();
    
 if(sea.x < 0){
    sea.x = sea.width/2;
  }


 
}
