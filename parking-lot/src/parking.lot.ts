import { Floor } from "./parking.floor";

export class ParkingLot{
    id : string ;
    parkingLot : Floor[] = [];
    no_floor : number;
    no_slots : number;

    constructor(id : string , no_of_floors : number , no_of_slots : number){
        this.id = id;
        this.no_floor = no_of_floors;
        this.no_slots = no_of_slots;

        for(let i = 0 ; i < no_of_floors ; i++){
            this.addFloor( i , no_of_slots);
        }
    }

    addFloor(level : number , totalSpots : number){
        const floor = new Floor(level , totalSpots);
        this.parkingLot.push(floor);
    }

    getTotalFloor(){
        return this.no_floor;
    }

    getNoOfSpot(){
        return this.no_slots;
    }



}