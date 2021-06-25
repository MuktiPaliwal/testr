var issImg, bathImg, gymImg, drinkImg, eatImg, moveImg, sleepImg, brushImg; 

var astronaut,iss;

function preload(){
  issImg = loadImage("Images/iss.png");
  bathImg = loadAnimation("Images/bath1.png", "Images/bath2.png");
  gymImg = loadAnimation("Images/gym1.png", "Images/gym2.png", "Images/gym11.png", "Images/gym12.png");
  drinkImg = loadAnimation("Images/drink1.png", "Images/drink2.png");
  eatImg = loadAnimation("Images/eat1.png", "Images/eat2.png");
  moveImg = loadAnimation("Images/move.png", "Images/move1.png");
  sleepImg = loadImage("Images/sleep.png");
  brushImg = loadImage("Images/brush.png");
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 200, 10, 10);
  iss.addImage("iss", issImg);
  iss.scale = 0.161;

  astronaut = createSprite(300, 230, 10, 10);
  astronaut.addImage("astronaut", sleepImg);
  astronaut.scale = 0.1;

}

function draw() {
  background(0);  
  drawSprites();
}