export class Ticket{
    parking_lot_id : string ;
    floor_no : number ;
    slot_no : number ;

    ticket : string;

    constructor(parking_lot_id : string  , floor_no : number , slot_no : number){
        this.parking_lot_id = parking_lot_id;
        this.floor_no = floor_no;
        this.slot_no = slot_no;
    }

    generateTicket(){
        this.ticket = `${this.parking_lot_id}_${this.floor_no}_${this.slot_no}`;
    }

    getTicket(){
        return this.ticket;
    }

}