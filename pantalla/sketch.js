
var esponja, fondo, pantalla;

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

  
  textFont(font);
  textSize(fontsize);
  
    bounds = font.textBounds(message, 0, 0, fontsize);
  x = 0.685*width - bounds.w / 2;
  y = 0.75* height - bounds.h / 2;
}

function draw() {
  if (pantalla==0) {
    inicio1();
    
  } else  {(pantalla==1)
    juego();
  }

 

  // write the text in black and get its bounding box
  fill(255,200);
  text(message, x, y);
  bounds = font.textBounds(message,x,y,fontsize);


  if ( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y && mouseY <= bounds.y + bounds.h) {
    x += random(-3, 3);
    y += random(-2, 2);
  }
}

function mousePressed() {

if (pantalla==0){
    pantalla=1;

}
}
function inicio1(){
  background(fondo);  
  textSize(100);
  fill(255);
  
  animation(esponja, 535, 525);
  
}
function juego(){
  
  background(0);  
  
  
}

