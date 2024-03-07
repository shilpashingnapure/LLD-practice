import { Cell } from "./cellType.js";

export class Board{
    size;
    board = [];
    constructor(size){
        this.size = size;

        for(let i = 0 ; i < size ; i ++){
            let b = []
            for(let j = 0 ; j < size ; j++){
                let cell = new Cell();
                b.push(cell);
                
            }
            this.board.push(b);
        }

    }

    getBorderSize(){
        return this.size;
    }

    addCell(r , c , cell){
        if ( r < 0 || r >= this.size || c < 0 || c >= this.size){
            return false;
        }
        if (this.board[r][c].cellType != undefined){
            return false;
        }
        this.board[r][c].cellType = cell
        return true;

    }

    isTie(){
        for(let i = 0 ; i < this.size ; i++){
            for(let j = 0 ; j < this.size ; j++){
                if(this.board[i][j].cellType == undefined){
                    return false
                }
            }
        }
        return true;
    }

    isWinner( r , c , cellType){
        let horizontal = true;
        let vertical = true;
        let diagonal = true;
        let anidiagonal = true;

        // check of horizontal
        for(let i = 0 ; i < this.size ; i++){
            let val = this.board[r][i].cellType
            if (val == undefined || val != cellType){
                horizontal =false;
            }
        }

        //check for vertical
        for(let i = 0 ; i < this.size ; i++){
            let val = this.board[i][c].cellType
            if(val == undefined || val != cellType){
                vertical = false;
            }
        }

        for(let i = 0 ; i < this.size ; i++){
            let val = this.board[i][i].cellType
            if(val == undefined || val != cellType){
                diagonal = false;
            }
        }

        for(let i = 0  , j = this.size - 1 ; i < this.size ; i++ , j--){
            let val = this.board[i][j].cellType
            if(val == undefined || val != cellType){
                anidiagonal = false;
            }
        }

        return horizontal || vertical || diagonal || anidiagonal
        
    }

    printBoard(){
        for(let i = 0 ; i < this.size ; i++){
            let b = ''
            for(let j = 0 ; j < this.size ; j++){
                if (this.board[i][j].cellType != undefined){
                    b += ' ' + this.board[i][j].cellType + ' '
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

}