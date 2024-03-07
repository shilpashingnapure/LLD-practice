import { Board } from 'board';
import { PieceX, PieceO, PieceY } from 'cell';
import { Player } from 'player';
import PromptSync  from 'prompt-sync';

let prompt = PromptSync();

class Game{
    players : Player[] = [];
    board : Board;

    constructor(){
        let cellx = new PieceX();
        let p1 = prompt(`${cellx.piece} Enter your name `);

        this.players.push(new Player(p1 , cellx.piece));

        let cello = new PieceO();
        let p2 = prompt(`${cello.piece} Enter your name `);

        this.players.push(new Player(p2 , cello.piece));

        this.board = new Board(3);

    }

    startGame(){
        while (true){
            this.board.printBoard();
            let playerturn = this.players[0];
            let [r , c] = prompt(`${playerturn.name} Please Enter Position `).split(' ');
            
            let isValidPosition : boolean = this.board.addPeice( parseInt(r) , parseInt(c) , playerturn.getPiece());

            if(!isValidPosition){
                console.log('<<<<<<<<<<< Invalid Move >>>>>>>>>>>>>');
                continue;
            }

            this.players = this.players.slice(1 , this.board.getBoardSize());
            this.players.push(playerturn);

            let isWinner = this.board.checkWinner(parseInt(r) , parseInt(c) , playerturn.getPiece());

            if (isWinner){
                this.board.printBoard();
                console.log(`${playerturn.name} WON the Game`);
                return;
            }

            let isTie = this.board.isTie();
            if(isTie){
                this.board.printBoard();
                console.log('Game Over');
                return;
            }
        }

    }
    
}

const g = new Game();
g.startGame();