var backIm,ground;
var trex,trexIm,trex_collided;
var database
var gameState=0;
function preload(){
backIm=loadImage("background.jpg")
trexIm= loadAnimation("trex1.png","trex3.png","trex4.png");
trex_collided = loadAnimation("trex_collided.png");


}
function setup(){
var canvas=createCanvas(1200,600)
trex = createSprite(50,460,20,50);
ground=createSprite(500,520,2000,20)
  //database = firebase.database();
  trex.addAnimation("running", trexIm);

}

function draw(){
background(backIm)
drawSprites()
}

function getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

 function update(state){
    database.ref('/').update({
      gameState: state
    });
  }