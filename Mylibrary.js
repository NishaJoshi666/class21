function move(move1Rect,move2Rect){
    if (move1Rect.x - move2Rect.x < move2Rect.width/2 + move1Rect.width/2
      && move2Rect.x - move1Rect.x < move2Rect.width/2 + move1Rect.width/2) {
    move1Rect.velocityX = move1Rect.velocityX * (-1);
    move2Rect.velocityX = move2Rect.velocityX * (-1);
  }
  if (move1Rect.y - move2Rect.y < move2Rect.height/2 + move1Rect.height/2
    && move2Rect.y - move1Rect.y < move2Rect.height/2 + move1Rect.height/2){
    move1Rect.velocityY = move1Rect.velocityY * (-1);
    move2Rect.velocityY = move2Rect.velocityY * (-1);
  }
  }