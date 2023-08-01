//Variaveis do Ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30,30);
}

function movimentoAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 2;
  } 
  if(keyIsDown(DOWN_ARROW)){
    if(podeSemover()){
     yAtor += 3; 
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i+1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaposicaoInicial();
      somDaColisao.play();
        if (pontosMaiorqueZero()){
          meusPontos -=1;
        }
     print("colidiu") 
    }
  }
}

function voltaAtorParaposicaoInicial(){
  yAtor = 366
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 59, 0));
  text (meusPontos, width / 5, 9, 302);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1; 
    somDoPonto.play();
    voltaAtorParaposicaoInicial();
  }
}

function pontosMaiorqueZero(){
  meusPontos = 0
}

function podeSemover(){
  return yAtor < 368;
}