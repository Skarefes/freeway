function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw(){
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentoCarro();
  movimentoAtor();
  voltarCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  podeSemover();
}
