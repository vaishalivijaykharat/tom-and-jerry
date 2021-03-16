var cat,catimg1,catimg2,cat3,cat4;
var mouse,mouseimg1,mouseimg2,mouse3,mouse4;
var gardenimg,g;



function preload() {
    //load the images here
catimg1=loadImage("cat1.png");
catimg2=loadImage("cat2.png");
cat3=loadImage("cat3.png");
cat4=loadImage("cat4.png");

mouseimg1=loadImage("mouse1.png");
mouseimg2=loadImage("mouse2.png");
mouse3=loadImage("mouse3.png");
mouse4=loadImage("mouse4.png");

gardenimg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

g=createSprite(1000,800)
g.addImage("g",gardenimg);
cat=createSprite(200,300,40,40);
cat.addAnimation("cats",catimg1);
mouse=createSprite(400,300,40,40);
mouse.addAnimation("mk",mouseimg1);
mouse.velocityY=1;
mouse.velocityx=1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
text(mouseX+","+mouseY,10,45);

if(cat.x-mouse.x<(cat.width-mouse.width)/2){
cat.addAnimation("cat4img",cat3);
cat.changeAnimation("cat4img")
}

keyPressed();
drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keycode===LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("catRunning",catimg2);
cat.changeAnimation("catRunning");

}

}
