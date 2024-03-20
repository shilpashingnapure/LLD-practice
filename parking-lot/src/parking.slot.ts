import { Vehicle } from "./vehicle";
import { VehicleType } from "./vehicles.type";

export class Slot {
    spot : number ;
    vehicleType : VehicleType;
    isAvaiable : boolean;
    vehicle : Vehicle;
    constructor(spot: number , vehicle : VehicleType){
        this.spot = spot + 1;
        this.vehicleType = vehicle;
        this.isAvaiable = true;
        this.vehicle = null;

    }

    parkVehicle(vehicle){
        this.vehicle = vehicle;
    }

    getVehicle(){
        return this.vehicle;
    }
}