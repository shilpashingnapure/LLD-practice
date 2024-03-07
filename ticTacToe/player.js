export class Player{
    name;
    piece;
    constructor(name , piece){
        this.name = name;
        this.piece = piece;
    }

    getName(){
        return this.name;
    }
    getCell(){
        return this.piece.cellType;
    }
}