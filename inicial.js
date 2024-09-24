let listas_robos = ['img/robotron-vermelho.png' , 'img/robotron-rosa.png' , 'img/robotron-preto.png' , 'img/robotron-azul.png' , 'img/robotron-branco.png' , 'img/robotron-amarelo.png' ]

function proximo (){
    if(position < listas_robos.length -1){
        posicao++;
    }
    
}
proximo()

function anterior (){
    if(position > listas_robos.length +1){
        posicao++;
    }
    
}
anterior()
