import { VehicleType } from "./vehicles.type"

export class Display{
    constructor(){

    }

    freeCount(vehicle : VehicleType , parking_area){

        for(let i = 0 ; i < parking_area.length ; i++){
            const floor = parking_area[i]
            const freeCount = floor.slot_per_floor.filter(item => {
                return item.vehicleType == vehicle && item.isAvaiable
            })

            console.log(`No. of free slots for ${vehicle} on Floor ${floor.level} : ${freeCount.length}`)

        }
    }

    freeSlots(vehicle : VehicleType , parking_area){
        for(let i = 0 ; i < parking_area.length ; i++){
            const floor = parking_area[i]
            const freeslot = floor.slot_per_floor.filter((item)=> {
                return item.vehicleType == vehicle && item.isAvaiable
            }).map(item => item.spot)
            console.log(`No. of free slots for ${vehicle} on Floor ${floor.level} : ${freeslot}`)

        }   
    }

    occupiedSlots(vehicle : VehicleType , parking_area){
        for(let i = 0 ; i < parking_area.length ; i++){
            const floor = parking_area[i]
            const freeslot = floor.slot_per_floor.filter((item)=> {
                return item.vehicleType == vehicle && !item.isAvaiable
            }).map(item => item.spot)
            console.log(`Occupied slots for ${vehicle} on Floor ${floor.level} : ${freeslot}`)

        }   
    }
}

