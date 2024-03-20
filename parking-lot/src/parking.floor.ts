import { Slot } from "./parking.slot";
import { VehicleType } from "./vehicles.type";

export class Floor{
    level : number;
    slot : Slot;
    vehicleType : VehicleType;
    slot_per_floor : Slot[] = [];
    constructor(level , totalSlots){
        this.level = level + 1;

        for(let i = 0 ; i < totalSlots ; i++){
            if (i == 0){
                this.addSlot(i , VehicleType.Truck);
            }
            else if(i == 1 || i == 2){
                this.addSlot(i , VehicleType.Bike);
            }else{
                this.addSlot(i , VehicleType.Car);
            }
            
        }
        

    }

    addSlot(spot , vechicle){
        const slot = new Slot(spot , vechicle);
        this.slot_per_floor.push(slot);

    }
}