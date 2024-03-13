import PromptSync from "prompt-sync";
import { Board } from "./board";
import { Player } from "./player";
import { Dice } from "./dice";

const prompt = PromptSync();

class Game{
    board : Board;
    players : Player[] = [];
    dice : Dice;
    constructor(){

        this.board = new Board();
        this.dice = new Dice();

    }

    addPlayer(size : number){
        for(let i = 0 ; i < size ; i++){
            let p = prompt('Enter your name ');
            let player = new Player(p);
            this.players.push(player);
        }
    }

    startGame(){

        let size = parseInt(prompt('How many players playing '));
        this.addPlayer(size);

        while(true){

            let currentPlayer = this.players[0];
            let diec = this.dice.rolledDice();
            
            let positionStart = currentPlayer.currPosition;
            let positionEnd = this.board.checkPosition(positionStart + diec);

            let checkwinner = this.board.checkWinner(positionEnd);

            if(positionEnd > this.board.boardNum){
                console.log(`${currentPlayer.name} rolled a ${diec} but can't move from ${positionStart} to ${this.board.boardNum}`);
            }else{
                console.log(`${currentPlayer.name} rolled a ${diec} and moved from ${positionStart} to ${positionEnd}`);

            }

            if(checkwinner){
                console.log(`${currentPlayer.name} wins the game `);
                this.players = this.players.slice(1);

                if(this.players.length == 1){
                    return ;
                }
            }else{
                this.players = this.players.slice(1);
                this.players.push(currentPlayer);
            }
            
            if(positionEnd <= this.board.boardNum){
                currentPlayer.setPosition(positionEnd);
            }
            
            

        }


    }
}

let g = new Game();
g.startGame();