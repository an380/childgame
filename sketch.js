var canvas;
var music;
var ball
var rect1
var rect2
var rect3
var rect4
var Edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,400);
 ball=createSprite (400,20,50,50)
 ball.shapeColor = "white"
 ball.velocityX = 3   
ball.velocityY = 3
rect1=createSprite(750,390,200,30)
rect1.shapeColor = "red"
rect2=createSprite(530,390,200,30)
rect2.shapeColor = "blue"
rect3=createSprite(320,390,200,30)
rect3.shapeColor = "pink"
rect4=createSprite(100,390,200,30)
rect4.shapeColor = "yellow"
Edges = createEdgeSprites ()
}

function draw() {
    background("black");
    ball.bounceOff (Edges)
 if (childgame(ball,rect1) &&  ball.bounceOff (rect1)){
    ball.shapeColor = "red"
   
 }
 else if (childgame(ball,rect2) && ball.bounceOff (rect2)  
 ){
     ball.shapeColor = "blue"
     
 }
 else if (childgame(ball,rect3)){
     ball.shapeColor = "pink"
     ball.bounceOff (rect3)  
 }
 else if (childgame(ball,rect4)){
     ball.shapeColor = "yellow"
     ball.bounceOff (rect4)  
 }
 /*else {
     ball.shapeColor = "white"
 }*/
drawSprites()
    
}
function childgame(object1,object2){
    if (object2.y-object1.y<object1.height/2+object2.height/2){
         object1.shapeColor = "white"
         return true
    }
    /*else{
        return false    
    }*/
    
}