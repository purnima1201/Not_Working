class Game {
  constructor(){
    this.up = createButton('UP');
    }

    
  async start(){
    if(gameState === 0){
      
      homeScreen = new HomeScreen()
      homeScreen.display();
    }

    player1 = createSprite(displayWidth/2,100);
    player1.addImage("player1.png",player1_img);

    life1=createSprite(10,-130);
    life2=createSprite(55,-130);
    life3=createSprite(65,-130);
    life4=createSprite(75,-130);
    life5=createSprite(85,-130);
    life1.visible= false;
    life2.visible= false;
    life3.visible= false;
    life4.visible= false;
    life5.visible= false;
    virus=createSprite(displayWidth/2,400);
  }
  
  play(){
        
    homeScreen.hide();
    background(rgb(0,100,0));
    
    
   // virus.y=player1.y+250;
   // virus.velocityX=10;
   // virus.x=player1.x ;

    virus.addImage("virus1.png",virus_img);
    virus.scale=0.2;
    virus.setCollider("circle",0,0,30);
    
    gardenEntrence.addImage("garden.png",gardenEntrence_img);
    gardenEntrence.scale=0.5;
    
    camera.position.x = player1.x;
    camera.position.y = player1.y;

    //image(garden_img,-5000,-displayHeight*3.4,displayWidth*5,displayHeight*4);
    
    
    image(road_img,displayWidth/4,-displayHeight*400,800,displayHeight*99999);
    //image(road1_img,displayWidth/6,-displayHeight*800,800,displayHeight*2000);
    
    player1.depth=1;
    gardenEntrence.depth=7;
    
    life1.visible= true;
    life2.visible= true;
    life3.visible= true;
    life4.visible= true;
    life5.visible= true;

    life1.addImage("life.png",life1_img);
    life1.scale=0.03;
    life1.y=player1.y-330;
    life1.x=player1.x+80;
    
    life2.addImage("life.png",life2_img);
    life2.scale=0.03;
    life2.y=player1.y-330;
    life2.x=player1.x+40;

    life3.addImage("life.png",life3_img);
    life3.scale=0.03;
    life3.y=player1.y-330;
    life3.x=player1.x;
    
    life4.addImage("life.png",life4_img);
    life4.scale=0.03;
    life4.y=player1.y-330;
    life4.x=player1.x-40;

    life5.addImage("life.png",life5_img);
    life5.scale=0.03;
    life5.y=player1.y-330;
    life5.x=player1.x-80;

    if(life < 5){
      life1.visible=false;
    }
    if(life < 4){
      life1.visible=false;
      life2.visible=false;
    }
    if(life < 3){
      life1.visible=false;
      life2.visible=false;
      life3.visible=false;
    }
    if(life < 2){
      life1.visible=false;
      life2.visible=false;
      life3.visible=false;
      life4.visible=false;
    }
    if(life < 1){
      life1.visible=false;
      life2.visible=false;
      life3.visible=false;
      life4.visible=false;
      life5.visible=false;
    }
    if(keyWentDown(UP_ARROW) ){
      player1.velocityY = -23;
     // player1.addImage("player1.png",player1_img);
    }
    else if(keyWentUp(UP_ARROW) ){
      player1.velocityY = 0;
    }
    if(keyWentDown(DOWN_ARROW) ){
      player1.velocityY = 19;
      //player1.addImage("player2.png",player2_img);
    }
    else if(keyWentUp(DOWN_ARROW) ){
      player1.velocityY = 0;
    }
    if(keyWentDown(LEFT_ARROW) ){
      player1.velocityX = -17.5;
    }
    else if(keyWentUp(LEFT_ARROW) ){
      player1.velocityX = 0;
    }
    if(keyWentDown(RIGHT_ARROW) ){
      player1.velocityX = 17.5;
    }
    else if(keyWentUp(RIGHT_ARROW) ){
      player1.velocityX = 0;
    }
    if (player1.isTouching(virus)) {
      life=life-0.1;
    }

    this.up.position(displayWidth/2+500,displayWidth-1000)
    this.up.mousePressed(()=>{  
      player1.velocityY=-22;
    });
    this.up.mouseReleased(()=>{  
      player1.velocityY=0;
    });

    drawSprites();    

    }
    
    
  }
