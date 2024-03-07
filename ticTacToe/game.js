import  PromptSync from "prompt-sync";
import { Player } from "./player.js";
import { CellX, CellY } from "./cellType.js";
import { Board } from "./board.js";

const prompt = PromptSync();

class Game{
    players = [];
    gameBoard;
    constructor(){
        let cellX = new CellX();
        let player1 = prompt(` ${cellX.cellType} enter your name `);
        this.players.push(new Player(player1 , cellX));

        let cellY = new CellY();
        let player2 = prompt(`${cellY.cellType} enter your name `);
        this.players.push(new Player(player2 , cellY));

        this.gameBoard = new Board(4);

    }

    startGame(){

        while(true){
            this.gameBoard.printBoard();
            let playerturn = this.players[0];
            let [r , c] = prompt(`${playerturn.name} please enter position `).split(' ');
            let isValidPosition = this.gameBoard.addCell( parseInt(r)  , parseInt(c)  , playerturn.getCell());

            if(!isValidPosition){
                console.log(`Invalid Move`);
                continue;
            }

            this.players = this.players.slice(1 , this.gameBoard.getBorderSize());
            this.players.push(playerturn);

            let isWinner = this.gameBoard.isWinner(parseInt(r) , parseInt(c) , playerturn.getCell());

            if (isWinner){
                console.log(`${playerturn.name} won the game`);
                return
            }

            let isTie = this.gameBoard.isTie();
            if(isTie){
                console.log('Game Over');
                return;
            }
        }
        
    }

    








}

let game = new Game();
// game.playerNames();
game.startGame();