var gameState = "quiz";
var levelState = "one";
var wrong, right, spaceX, generalscienceX, techX, gkX, playSet, options, gkDis, gensciDis, spaceDis, techDis;
 right = 0;
 wrong = 0;

 spaceX = "not done";
 techX = "done";
 generalscienceX = "not done";
 gkX = "not done";

 playSet ="none";
 
function preload() {
  
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  options = new option();


  gkDis = new gk();
  gensciDis = new sci();
  spaceDis = new space();
  techDis = new tech();
}

function draw() {
  options.display();

  if(playSet == "generalSci"){
    gensciDis.display();
  }
  if(playSet == "tech"){
    techDis.display();
  }
  if(playSet == "space"){
    spaceDis.display();
  }
  if(playSet == "generalK"){
    gkDis.display();
  }
}

