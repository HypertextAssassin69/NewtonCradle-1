const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1,box2,box3,box4,box5,box6,ball,rope,ball2,rope2,ball3,rope3,ball4,rope4,ball5,rope5;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ball = new Pendulum(340, 450, "blue");
  ball2 = new Pendulum(400, 450, "red");
  ball3 = new Pendulum(460, 450, "yellow");
  ball4 = new Pendulum(520, 450, "red");
  ball5 = new Pendulum(580, 450, "blue");

  rope = new String(ball.body, { x: 340, y: 200 });
  rope2 = new String(ball2.body, { x: 400, y: 200 });
  rope3 = new String(ball3.body, { x: 460, y: 200 });
  rope4 = new String(ball4.body, { x: 520, y: 200 });
  rope5 = new String(ball5.body, { x: 580, y: 200 });

}

function draw(){
    background("green");
    Engine.update(engine);
   /*console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/


    ball.display();
    rope.display();
    ball2.display();
    rope2.display();
    ball3.display();
    rope3.display();
    ball4.display();
    rope4.display();
    ball5.display();
    rope5.display();
}
function mouseDragged(){
	Matter.Body.setPosition(ball5.body,{x:mouseX,y:mouseY})
  }
