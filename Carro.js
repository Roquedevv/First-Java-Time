//Codigo mestre carros y

let yCarros = [40,100,160,210];
let Speedycars =[8,9,10,7];
let xCarros = [600,600,600,600];
let Weight = 50;
let Height = 40;

//codigo do carro
let xCarro  = 600;

//codigo do carro2
let xCarro2  = 600;

//codigo do carro3
let xCarro3  = 600;

//codigo do carro5
let xCarro5  = 600;

function mostraCarro(){
  for (let i = 0; i < imagensCarro.length; i = i + 1 ){
  image(imagensCarro[i], xCarros[i],yCarros[i] ,Weight,Height);

  }
  
}
function movimentaCarro(){
  xCarros[0] -=Speedycars[0];
  xCarros[1] -=Speedycars[1];
  xCarros[2] -=Speedycars[2];
  xCarros[3] -=Speedycars[3];
}


function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < imagensCarro.length; i = i + 1){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 600;
        }
    }
}
function passouTodaATela(xCarro){
    return xCarro < - 50;
}