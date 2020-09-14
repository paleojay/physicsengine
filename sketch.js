const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
 createCanvas(800,400);
 e =Engine.create();
 world = e.world;
 ground_options ={
   isStatic: true
 }

 ground= Bodies.rectangle(400,390,800,5, ground_options);
 World.add(world,ground);
 ball=Bodies.circle(400,200,30);
 World.add(world,ball);
}


function draw() {
  background(0);  
  Engine.update(e);
  rectMode(CENTER);
  rect( ground.position.x, ground.position.y,800,5)
  ellipeMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
}
