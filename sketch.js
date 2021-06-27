
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var score=0
var engine, backgroundImg,box1,boxy,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box19,base1,ground,ground1,ground2,ball1; 
function preload() {
  backgroundImg=loadImage("wallpaper.jpg") 
}
function setup() {
    createCanvas(1900, 1080);
  
   
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
   
    
   ground=new Ground(150,600,10000,10)
   box17=new Box(200,500,100,100);
   box14=new Box(300,500,100,100);
   box15=new Box(400,500,100,100);
   box16=new Box(500,500,100,100);
   box1=new Box(600,500,100,100);
    box2=new Box(700,500,100,100);
    box3=new Box(800,500,100,100);
    box4=new Box(900,500,100,100);
    box5=new Box(1000,500,100,100);
    box6=new Box(1100,500,100,100);
    box7=new Box(1200,500,100,100);
    box8=new Box(1300,500,100,100);
    box9=new Box(1400,500,100,100);
    box10=new Box(1500,500,100,100);
    box11=new Box(1600,500,100,100);
    box12=new Box(1720,500,100,100);

   
    ball1 =new Hitter(760,860,20);

    slingshot=new SlingShot(ball1.body,{x:900,y:850});

   

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
 
    background(backgroundImg);
  textSize(38)
  fill("YELLOW")
  text("Drag the ball and Hit the PINS!!",450,180)
  
  textSize(38)
  fill("YELLOW")
  text("Press space to get ball again",560,230)
  fill("WHITE")
  strokeWeight(2.3)
  textSize(40);
  text("PIN SHOOTER",150,230)
  text("SCORE: "+score,1500,190)  
  //Engine.update(engine);
    
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box17.display();
 box14.display();
 box15.display();
 box16.display();
 ground.display();
 ball1.display();

 slingshot.display();

  
}

function mouseDragged(){

  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY}) 
    }
  
   
  
  
    function mouseReleased(){
  
     slingshot.fly()
      
      }

      function keyPressed(){
        if(keyCode===32){
         slingshot.attach(ball1.body)
        }
        
        }
      
       






