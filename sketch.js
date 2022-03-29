var bgImg,s1,s2,s3,s4,iss,issImg,spacecraft,hasDocked;
function preload() {
 bgImg=loadImage("spacebg.jpg");
 s1=loadImage("spacecraft1.png");
 s2=loadImage("spacecraft2.png");
 s3=loadImage("spacecraft3.png");
 s4=loadImage("spacecraft4.png");
 issImg=loadImage("iss.png");
}

function setup() {
  createCanvas(600,350);
  iss=createSprite(330, 130);
  iss.addImage(issImg);
  iss.scale=0.25;
spacecraft=createSprite(285,240);
spacecraft.addImage(s1);
spacecraft.scale=0.15;
hasDocked=false;
}

function draw() {
  background(bgImg);
if(!hasDocked){
  spacecraft.x = spacecraft.x + random(-1,1);
}
if(keyDown("UP_ARROW")){
  spacecraft.addImage(s2);
  spacecraft.y = spacecraft.y -2;
}
  
if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(s3);
  spacecraft.x = spacecraft.x - 1;
}
  
if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(s4);
  spacecraft.x = spacecraft.x + 1;
}
  
if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(s1);
}
if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
  hasDocked = true;
  textSize(25);
  fill("white")
  text("Docking Successful!", 200, 300);
}

  drawSprites();

}
