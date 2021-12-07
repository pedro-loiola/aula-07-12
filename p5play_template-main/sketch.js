
var square 














function setup() {                    //função para as configurações do jogo.
  createCanvas(400,400);               //criar a área do jogo.
  square = createSprite (200,200,20,20);              
}

function draw() 
{
  background("lightblue");
  
  if (keyIsDown(RIGHT_ARROW)) { //keyIsDown significa = "pressionar"  right arrow = "tecla seta para direita"
square.position.x=square.position.x + 4;
  }
  if (keyIsDown(LEFT_ARROW)) { //keyIsDown significa = "pressionar"  left arrow = "tecla seta para esquerda"
    square.position.x=square.position.x - 4;
      }
  if (keyIsDown(UP_ARROW)) { //keyIsDown significa = "pressionar"  up arrow = "tecla seta para cima"
    square.position.y=square.position.y - 4;
  }
  if (keyIsDown(DOWN_ARROW)) { //keyIsDown significa = "pressionar"  down arrow = "tecla seta para baixo"
    square.position.y=square.position.y + 4;
  }
  
  
  
  
  
  
  
    drawSprites();

}




