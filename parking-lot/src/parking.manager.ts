import { commands } from "..";
import { Display } from "./parking.display";
import { ParkingLot } from "./parking.lot";
import { Slot } from "./parking.slot";
import { Ticket } from "./parking.ticket";
import { Vehicle } from "./vehicle";
import { VehicleType } from "./vehicles.type";




export class ParkingManager{
    parking_lot : ParkingLot;
    parking_area : any ;
    display : Display;
    constructor(parkingLot : ParkingLot){
        this.parking_lot = parkingLot;
        this.parking_area = parkingLot.parkingLot;

        this.display = new Display();
    }

    park(vehicle : Vehicle){
        // find available slot
        let [canPark , floor , spot] = this.getAvaiableSpot(vehicle.type);

        // books it
        if(!canPark){
            console.log('Parking Lot Full');
            return;
        }
        
        this.parking_area[floor-1].slot_per_floor[spot-1].isAvaiable = false;

        // creates a ticket
        const ticket = new Ticket(this.parking_lot.id , floor , spot);
        ticket.generateTicket();
        
        //park vehicle
        this.parking_area[floor-1].slot_per_floor[spot-1].parkVehicle(vehicle);

        // retrun ticket
        let ticektId = ticket.getTicket();
        console.log(`Parked vehicle. Ticket ID : ${ticektId}`);
        
    }

    unpark(ticketId){
        let [id , floor , spot] = ticketId.split('_');


        if(!ticketId || floor > this.parking_lot.getTotalFloor() || spot > this.parking_lot.getNoOfSpot() || this.parking_area[floor-1].slot_per_floor[spot-1].isAvaiable ){
            console.log('Invalid Ticket')
            return;
        }

        let slot = this.parking_area[floor-1].slot_per_floor[spot-1]
        const vehicalDetails = slot.getVehicle();

       
       // unpark
        slot.isAvaiable = true;
        slot.vehicle = null;
        
        console.log(`Unparked vehicle with Registration Number : ${vehicalDetails.regNumber} and Color : ${vehicalDetails.color}`)

    }

    getAvaiableSpot(vehicle){
        
        let canPark = false;
        let level = null;
        let slot = null;
        for(let i = 0 ; i < this.parking_area.length ; i++){
            let floor = this.parking_area[i];
            let spots = floor.slot_per_floor.find(item => item.vehicleType == vehicle && item.isAvaiable);

            if(spots != undefined){
                level = floor.level
                slot = spots.spot;
                canPark = true; 
                break;
            }

        }

        return [canPark , level , slot];

    }

    displayStatus( displayType : string , vehicle : VehicleType){
        switch(displayType){

            case commands.free_count:
                this.display.freeCount(vehicle , this.parking_area);
                break;
            case commands.free_slots:
                this.display.freeSlots(vehicle , this.parking_area);
                break;
            case commands.occupied_slots:
                this.display.occupiedSlots(vehicle , this.parking_area);
                break;
            default:
                break;
        }        
    }




}