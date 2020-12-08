class Box{
  constructor(x,y,width,height){
   var body_options={
      restituation:0.8,
      friction:0.04,
      density:0.04
    }
    this.body = Matter.Bodies.rectangle(x,y,width,height,body_options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  }
  display(){
    var angle = this.body.angle;
    var pos = this.body.position ;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke(4);
    strokeWeight(10);
    fill("red")
    rect(0,0,this.width,this.height);
    pop();
  }
}