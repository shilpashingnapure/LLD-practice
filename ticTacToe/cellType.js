// const enum cellType {

// } 

export class Cell{
    cellType;
    constructor(celltype){
        this.cellType = celltype;
    }
}

export class CellX extends Cell{
    constructor(){
        super('X');
    }
}

export class CellY extends Cell{
    constructor(){
        super('O');
    }
}