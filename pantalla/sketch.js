
var esponja, fondo, pantalla, input;
//var button;
var message = "C    MING \n      BACK",
  font,
  bounds, 
  fontsize = 60,
  x, y;


function preload() {
 font = loadFont('data/HoboStd.otf');


esponja = loadAnimation("data/p2-1.png", "data/p2-37.png");
fondo = loadImage("data/fondo.jpg");
}

function setup() {
  createCanvas(1024,768);
pantalla=0;
//input = createInput();
//button = createButton('Instrucciones');
//button.position(200,150);
//button.size(100,60);
//button.mousePressed(instruc)
  
  textFont(font);
  textSize(fontsize);
  
    bounds = font.textBounds(message, 0, 0, fontsize);
  x = 0.685*width - bounds.w / 2;
  y = 0.75* height - bounds.h / 2;
}

function draw() {
inicio1();

  fill(255,200);
  text(message, x, y);
  bounds = font.textBounds(message,x,y,fontsize);


  if ( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y && mouseY <= bounds.y + bounds.h) {
    x += random(-3, 3);
    y += random(-2, 2);
  }
}

function inicio1(){
  background(fondo);  
  textSize(100);
  fill(255);
  
  animation(esponja, 535, 525);
  
}

function instruc(){
  background(0);
  fill(255);
  noStroke();
  rect(300,300, 200,50);
  
}


