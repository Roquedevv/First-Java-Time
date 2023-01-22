function setup() {
  createCanvas(500, 400);
  songstart.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  CheckCollide();
  LeftPoints();
  RightPoints();
  ChangeMyScore();
  
  
  

}

