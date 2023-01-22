//imagens do jogo  e sons

let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;

// Sons do jogo
let songstart;
let songdamage;
let songscore;

function preload(){
  imagemDaEstrada  = loadImage("imagens/estrada.png");
  imagemDoAtor =  loadImage("imagens/ator-1.png");
  imagemDoCarro = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  imagemDoCarro5 = loadImage("imagens/carro-5.png");
  
  imagensCarro =[imagemDoCarro,imagemDoCarro2,imagemDoCarro3,imagemDoCarro5];
  
  songstart = loadSound ("Songs/trilha.mp3");
  songdamage = loadSound ("Songs/colidiu.mp3")
  songscore = loadSound ("Songs/pontos.wav")
  
}