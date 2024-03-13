export class Board {
  snake = {
    62: 5,
    33: 6,
    49: 9,
    88: 16,
    41: 20,
    56: 53,
    98: 64,
    93: 73,
    95: 75,
  };
  ladder = {
    2: 37,
    27: 46,
    10: 32,
    51: 68,
    61: 79,
    65: 84,
    71: 91,
    81: 100,
  };

  boardNum : number;

  constructor(board : number = 100) {
    this.boardNum = board;
 
  }
  
  checkPosition(position){
    if(this.snake[position] != undefined){
        return this.snake[position]
    }

    else if(this.ladder[position] != undefined){
        return this.ladder[position];
    }
    else{
        return position;
    }
  }

  checkWinner(position){
    if(position == this.boardNum){
        return true
    }
    return false;
  }
}
