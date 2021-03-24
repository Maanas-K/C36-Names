var hypnoticBall, database;
var position;
var game, form, player, playerCount, gameState=0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game= new Game ()
  game.getState();
  game.start();

  form = new Form();
  
 
}

function draw(){
  background("white");
  
   //form.display(); 
  
}
