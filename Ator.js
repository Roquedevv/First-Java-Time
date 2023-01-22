//Ator
let Collide = false;
let yAtor = 366;
let xAtor = 200;
let MyScore = 0;
let Score = 0

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
    
  if(keyIsDown(DOWN_ARROW))
    if(Canmove()){
     yAtor +=3;  
    }
   
  if(keyIsDown(RIGHT_ARROW)){
    xAtor +=3;
  }
    
  if(keyIsDown(LEFT_ARROW)){
    xAtor -=3;
  }
    
  
}

function CheckCollide(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagensCarro.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], Weight, Height, xAtor, yAtor, 15)
    if (colisao){
      ReturnAtor();
      songdamage.play();
      Score += 1;
    }
  }
}
function ReturnAtor(){
  yAtor= 366;
}


function LeftPoints(){
  textAlign(CENTER);
  fill(color(75,0,130))
  textSize(28); 
  text(MyScore,100, 30);
}

function RightPoints(){
  textAlign(CENTER);
  textSize(28);
  text(Score, 400 , 30);
}

function ChangeMyScore (){
  if (yAtor < 15){
    MyScore += 1
    songscore.play();
    ReturnAtor ();
  }
  
}

function Canmove(){
  return yAtor < 366; 
}

