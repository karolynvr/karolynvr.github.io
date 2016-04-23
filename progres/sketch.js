var fantasma, s;
var fdie, texto1;
var borde, borde1;
var piso;
var fondo;
var gameOver;

function preload() {
  fantasma = loadAnimation('imagenes/p1.png', 'imagenes/p28.png');
  fondo = loadImage("imagenes/fondo.jpg");
  texto1 = loadImage("imagenes/fondodie/text1.png");
  fdie=loadAnimation('imagenes/fondodie/die1.png', 'imagenes/fondodie/die15.png');
}

function setup() {
  createCanvas(1024, 768);

  malos = new Group();

  for (var i = 0; i < 15; i++) {
    var dot = createSprite(random(0, width), (i * 50));
    dot.addAnimation("existen", "imagenes/P2-1.png", "imagenes/P2-37.png");
    dot.setCollider('circle', -2, 2, 25);
    malos.add(dot);
  }

  borde = createSprite(-10, 0.5 * height, 1, height);
  borde.shapeColor = color(0, 0, 0);

  borde2 = createSprite(width, 0.5 * height, 1, height);
  borde2.shapeColor = color(0, 0, 0);

  piso = createSprite(width / 2, 0.9 * height);
  piso.addImage(loadImage('imagenes/piso.png'));

  s = createSprite(0.1 * width, 0.70 * height, 128, 240);
  s.addAnimation('flota', fantasma);
  s.scale=0.7;
  s.setCollider('rectangle', 0, 0, 80, 180);
  gameOver = false;
}

function draw() {
  clear();
  background(fondo);
 
  s.collide(piso);
  s.collide(borde);
  s.collide(borde2);
  drawSprites();
  
  if (!gameOver) {
    if (s.position.y < 0)
      s.position.y = 0;

    if (s.overlap(malos))
      die();
  }else{
    
    
    animation(fdie,width/2,height/2);
    image(texto1,0,0);

  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    s.velocity.x = -3;
  } else if (keyCode === RIGHT_ARROW) {
    s.velocity.x = +3;
  } else if (keyCode === UP_ARROW) {
    s.velocity.y = -3;
  } else if (keyCode === DOWN_ARROW) {
    s.velocity.y = +3;
  }
}

function die() {
  updateSprites(false);
  gameOver = true;
}

function start() {
    s.removeSprites();
    gameOver=false;
     updateSprites(true);
     malos.removeSprites();
     s.position.x=0;
     s.position.y=0.70 * height;
     s.velocity.x=0;
      s.velocity.y=0;
     fondo.position.x=width/2;
     fondo.position.y=height/2;
     
     
}

function mousePressed(){
   if (!gameOver) {
    start();
  }
}



  
  
//}



