
export class Player{
    name : string;
    currPosition : number = 0;
    constructor(name : string){
        this.name = name;
    }

    setPosition(position){
        this.currPosition = position;
    }
}