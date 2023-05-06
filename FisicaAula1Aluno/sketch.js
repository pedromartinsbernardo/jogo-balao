
const Engine = Matter.Engine
const Mundo = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
var fisica,terra
var ball,ground


function setup() {
    createCanvas(400,400)
    ellipseMode(RADIUS)
    rectMode(CENTER)
    fisica = Engine.create()
    terra = fisica.world

var BallOptions = {

 restitution: 0.99,
 frictionAir: 0.01
}

    ball = Bodies.circle(180,30,20,BallOptions)
    Mundo.add(terra, ball)

    ball2 = Bodies.circle(250,30,20,BallOptions)
    Mundo.add(terra, ball2)

ground = Bodies.rectangle(200,390,400,20,{isStatic:true})
Mundo.add(terra, ground)

ground2 = Bodies.rectangle(300,200,200,20,{isStatic:true})
Mundo.add(terra, ground2)

}


function draw() {
background(0)
Engine.update(fisica)
ellipse(ball.position.x,ball.position.y, 20)
rect(ground.position.x ,ground.position.y, 400,20)


ellipse(ball2.position.x,ball2.position.y, 20)
rect(ground2.position.x ,ground2.position.y, 200,20)
}

