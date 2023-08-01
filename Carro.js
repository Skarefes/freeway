//Variaveis do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 260, 318];
let velocidadeCarros = [2.1, 2.7, 3.2, 5, 3.1, 2.5];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
} 

function movimentoCarro() {
  for (let i = 0; i < imagemCarros.length; i = i+1){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltarCarro() {
  for (let i = 0; i < imagemCarros.length; i = i+1){
  if (passouTodaTela(xCarros[i])) {
    xCarros[i] = 600;
  }
 }
}

function passouTodaTela(xCarros){
  return xCarros < -50;
}