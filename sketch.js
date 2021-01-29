var dog, happyDog, database, foodS, foodStock;

function preload()
{
	dog=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  foodStock=dataBase.ref('food');
  foodstock.on("value",readStock);
}

function draw() {  
  drawSprites();
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDog);

  }

}
text("Note:Press UP_ARROW Key To Feed Joy Milk!"480,500);
textSize(30);
fill() 
stroke() 

function readStock(data){
foodS=data.val();
}

function writeStock(x){
f(x<=0){
  x=0;
}else{
  x=x-1;
}
database.ref('/').update({
})
}
