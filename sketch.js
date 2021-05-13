var bg,bgImage;
var cat,catImage,cat_change; 
var mouse,mouseImage,mouse_change;


function preload() {
    //load the images here
    bgImage=loadImage("garden.png");
    catImage=loadImage("cat1.png","cat2.png","cat3.png","cat4.png");
    mouseImage=loadImage("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
  }

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  bg=createSprite(800,600);
  bg.addImage("garden",bgImage);
  cat=createSprite(600,20,10,10);
  cat.addImage("cat",catImage);
 
  mouse=createSprite(400,100,10,10);
  mouse.addImage("mouse",mouseImage);
}




function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    IF (cat.x-mouse.x<(cat.width - mouse.width)/2)
    {
    mouse_change.changeImage("mouse");
    cat_change.changeImage("cat");
    }

keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
mouse.addImage("mouse",mouseImage);
mouse.changeImage("mouse");
mouse.frameDelay = 25;
}
if(keyCode===RIGHT_ARROW){
  mouse.addImage("mouse",mouseImage);
  mouse.changeImage("mouse");
  mouse.frameDelay = 25;
  }
}

