var fixedrectangle, movingrectangle;



function setup() {
  createCanvas(800,400);
  fixedrectangle = createSprite(10, 10, 400, 400);
  fixedrectangle.shapeColor = "green";
  movingrectangle = createSprite(30, 30, 200, 200);
  movingrectangle.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  movingrectangle.x = World.mouseX;
  movingrectangle.y = World.mouseY;
  if(movingrectangle.x - fixedrectangle.x === fixedrectangle.width/2 + movingrectangle.width/2){
    movingrectangle.shapeColor = "red";
    fixedrectangle.shapeColor = "red"; 
  }  
  drawSprites();
}