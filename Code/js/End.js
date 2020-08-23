class End {

    constructor() {

    }
    theEnd(){
    if(gameState==10){
      if(life<0){
        //text("The End",player1.x,player1.y);
        //theEnd=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
        //theEnd.addImage("End",theEnd_img);
        image(theEnd_img,displayWidth/100,-displayHeight/10,displayWidth,displayHeight);
        game.hide();
        

        
      }
  }
        drawSprites();
    }
      
}