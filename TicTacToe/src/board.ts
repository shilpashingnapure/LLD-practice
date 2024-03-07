import { CellType, piece } from "cell";

export class Board{
    size : number;
    board : (piece | null)[][] = [];
 
    constructor(size : number){
        this.size = size;


        for(let i = 0 ; i < size ; i ++){
            let temp = []
            for(let j = 0 ; j < size ; j++){
                temp.push(null)
            }
            this.board.push(temp)
        }
        
        
    }

    getBoardSize(){
        return this.size;
    }

    printBoard(){
        for(let i = 0 ; i < this.size ; i++){
            let b = ''
            for(let j = 0 ; j < this.size ; j++){
                if (this.board[i][j] != null){
                    b += ' ' + this.board[i][j] + ' '
                }else{
                    b += ' - '
                }

                if(j < this.size-1){
                    b += ' | '
                }
            }
            console.log(b);
        }

    }
    checkWinner(r  : number, c : number, piece : piece){
        let horizontal = true;
        let vertical = true;
        let diagonal = true;
        let anidiagonal = true;
        // check of horizontal
        for(let i = 0 ; i < this.size ; i++){
            let val = this.board[r][i]
            if (val == null || val != piece){
                horizontal =false;
            }
        }

        //check for vertical
        for(let i = 0 ; i < this.size ; i++){
            let val = this.board[i][c]
            if(val == null || val != piece){
                vertical = false;
            }
        }

        for(let i = 0 ; i < this.size ; i++){
            let val = this.board[i][i]
            if(val == null || val != piece){
                diagonal = false;
            }
        }

        for(let i = 0  , j = this.size - 1 ; i < this.size ; i++ , j--){
            let val = this.board[i][j]
            if(val == null || val != piece){
                anidiagonal = false;
            }
        }

        return horizontal || vertical || diagonal || anidiagonal

    }
    addPeice(row : number, col : number , piece : piece){
        if ( row < 0 || row >= this.size || col < 0 || col >= this.size){
            return false;
        }
        if (this.board[row][col] != null){
            return false;
        }

        this.board[row][col] = piece;
        return true;

    }

    isTie(){
        for(let i = 0 ; i < this.size ; i++){
            for(let j = 0 ; j < this.size ; j++){
                if(this.board[i][j] == null){
                    return false
                }
            }
        }
        return true;
    }
}