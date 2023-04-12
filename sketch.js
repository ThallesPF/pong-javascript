//console.log("")
// variaveis bola
let xBall = 450;
let yBall = 300;
let diam = 23;
let R = diam /2;
// velocidade bola
let speedXBall = 10;
let speedYBall = 10;
// variaveis barra
let xBar = 10;
let yBar= 250;
let largBar = 8;
let altBar = 125;
let xBar2 = 885;
let yBar2 = 250;
let speedYBar2;
let misspercent = 0;
//sons
let pnt;
let hitb;
// variaveis pontos
let P1 = 0;
let P2 = 0;
// função fundo
let hit = false;
function setup() {
  createCanvas(900,600);
}
// função render
function draw() {
  background(0);
  ball()
  moviment()
  colision()
  bar(xBar, yBar)
  bar(xBar2, yBar2)
  MoveB()
  MoveB2()
  //MoveB2player()
  hitBar(xBar, yBar)
  hitBar(xBar2, yBar2)
  scoreCount()
  score()
  preload()
  }
// função bola
function ball(){
  circle(xBall, yBall, diam)
}
// função barra
function bar(x,y){
  rect(x, y, largBar, altBar)
}
// função movimento bola
function moviment(){
  xBall+= speedXBall;
  yBall+= speedYBall;
  }
// função colisão bola
function colision(){
  if (xBall + R > width || xBall - R < 0){
    speedXBall *= -1;
  }
  if (yBall + R > height || yBall - R < 0 ){
    speedYBall *= -1;
  }
}
// função colisão barra
function hitBar(x, y){
  hit =
  collideRectCircle(x, y, largBar, altBar, xBall, yBall, R);
  if (hit){
    speedXBall *= -1
    hitb.play();
  }
}
// função movimento barra
function MoveB(){
  if (keyIsDown(87)){
    yBar -= 10;
  }
  if (keyIsDown(83)){
    yBar += 10;
  }
}
function MoveB2(){
  speedYBar2 = yBall - yBar2 - largBar/ 2 -100;
  yBar2 += speedYBar2 + misspercent
  calmisspercent()
}
function scoreCount(){
  textAlign(CENTER)
  textSize(18)
  stroke(255)
  fill(color(252, 140, 3))
  rect(235, 53, 30, 30)
  fill(255)
  text (P1, 250, 75)
  fill(color(252, 140, 3))
  rect(635, 53, 30, 30)
  fill(255)
  text (P2, 650, 75) 
}
function score(){
  if (xBall > 885){
    P1 += 1
    pnt.play();
  }
  if (xBall < 15){
    P2 += 1
    pnt.play();
  }
}
function preload(){
  hitb = loadSound("raquetada.mp3")
  pnt = loadSound("ponto.mp3")
}
function MoveB2player(){
  if (keyIsDown(UP_ARROW)){
    yBar2 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yBar2 += 10;
  }
}
function calmisspercent(){
  if (P2 > P1){
    misspercent += 1
    if (misspercent >= 39){
      misspercent = 40
    }else {
      misspercent -= 1
      if (misspercent <= 35){
        misspercent = 35
      }
    }
  }
}