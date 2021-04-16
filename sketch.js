const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2
var box3
var box4
var Box5
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new ground(600,380,1200,20)
    
  
  
        box1 = new Box(800,350,70,70);
        box2=new Box(1000,350,70,70)
        pig1 = new Pig(900,350)
        log1=new Log(900,330,300,PI/2)
        bird=new Bird(300,200)
        pig2=new Pig(900,310)
        box3=new Box(800,310,70,70)
        box4=new Box(1000,310,70,70)
        log2=new Log(900,290,300,PI/2)

        box5=new Box(900,250,70,70)
        log3=new Log(870,250,200,PI/5)
        log4=new Log(930,250,200,PI/-5)
}



function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display()
    box3.display()
   box4.display()
    ground1.display ()
    pig1.display()
pig2.display()
    log1.display()
log2.display()
box5.display()
log3.display()
log4.display()
bird.display()
}

