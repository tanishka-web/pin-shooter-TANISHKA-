
class Box extends BaseClass {
  constructor(x, y){
    super(x,y,100,100);
    this.image = loadImage("pin.png");
    this.remove=true
 
  }
display()
{
  //console.log(this.body.)
if((this.body.speed)<7)
{super.display();
}else
{
World.remove(world,this.body) 

if(this.remove===true) {
  score=score+10;
  this.remove=false;
}

//push();
//this.Visiblity=this.Visiblity-5;
//tint(255,this.Visiblity)

//do nothing
//image(this.image,this.body.position.x,this.body.position.y,50,50)
//pop();
}}
};
