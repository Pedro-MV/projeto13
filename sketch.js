const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

var flechas=[]

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
 
  rectMode(CENTER)
  //criar corpo da base do jogador
  playerBase=Bodies.rectangle (200,windowHeight/2,180,150, {isStatic:true})
  

  //criar corpo do jogador
  player=Bodies.rectangle (270,windowHeight/3.1,50,180,{isStatic:true})


  arco=new Arco (350,windowHeight/2.6,100,100)

  flecha=new Flecha(300,windowHeight/2.6,100,100)

}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  image(playerimage,player.position.x,player.position.y,50,180)

  //exibir a imagem da base do jogador usando a função image()
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)

  arco.criar()
  flecha.criar()

  for (var i=0; i < flechas.length; i++){
    if(flechas[i]!==undefined){
      flechas[i].criar()
    }
  }
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}

function keyPressed(){
  if(keyCode==32){
  flecha=new Flecha(300,windowHeight/2.6)
  flecha.shoot()
  flechas.push(flecha)
  }
}
