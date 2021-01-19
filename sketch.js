var cat
var mouse
var garden
function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(800,800);
    cat = createSprite(750,750,30,30)
    mouse = createSprite(50,50,30,30)
}

function draw() {

    background(255);
    /*if(keyPressed("LEFT_ARROW")){
        cat.x = cat.x-4
        cat.addImage(tom2)
        mouse.addImage(jerry3)
    }*/
    if (cat.x-mouse.x<cat.width/2+mouse.width/2){
        mouse.addImage(jerry1)
        cat.addImage(tom1)
    }

    drawSprites();
}
function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}

