import PromptSync from "prompt-sync";
import { ParkingLot } from "./src/parking.lot";
import { ParkingManager } from "./src/parking.manager";
import { Bike, Car, Truck } from "./src/vehicle";
import { VehicleType } from "./src/vehicles.type";
import { readFileSync } from 'fs';
import { join } from 'path';




export enum commands {
    create_parking_lot = 'create_parking_lot' , 
    park_vehicle = 'park_vehicle',
    unpark_vehicle = 'unpark_vehicle',
    display = 'display' ,
    exit = 'exit',
    free_count = 'free_count',
    free_slots = 'free_slots' ,
    occupied_slots = 'occupied_slots'

}



const inputs = readFileSync( join(__dirname , 'input.txt') , 'utf-8').split('\n');
let parkingLot = null;
let parkingLot_manager = null;

inputs.forEach((line) => {
    let input = line.split(' ');
    let cmd = input[0];
    switch(cmd){
        case commands.create_parking_lot:
            parkingLot = new ParkingLot(input[1] , parseInt(input[2]) , parseInt(input[3]));
            parkingLot_manager = new ParkingManager(parkingLot);
            break;
        case commands.park_vehicle:
            let vechicle = input[1]
            switch(vechicle){
                case VehicleType.Car :
                    parkingLot_manager.park(new Car(input[2] , input[3]));
                    break;
                case VehicleType.Bike:
                    parkingLot_manager.park(new Bike(input[2] , input[3]));
                    break;
                case VehicleType.Truck:
                    parkingLot_manager.park(new Truck(input[2] , input[3]));
                    break;
                default:
                    console.log(`Parking is unable for ${input[1]} vehicle`);
                    break;
            }
            break;
        case commands.unpark_vehicle:
            parkingLot_manager.unpark(input[1]);
            break;
        case commands.display: 
            parkingLot_manager.displayStatus(input[1] , input[2]);
            break;
        case commands.exit:
            break;
        default:
            break;
               
}

});
