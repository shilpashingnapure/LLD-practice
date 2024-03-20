import { VehicleType } from "./vehicles.type";

export class Vehicle{
    regNumber : string;
    color : string;
    type : VehicleType;

    constructor(regNumber:string , color:string , type : VehicleType){
        this.regNumber = regNumber;
        this.color = color;
        this.type = type;
    }

}


export class Truck extends Vehicle{
    constructor(regNumber : string , color : string){
        super(regNumber , color , VehicleType.Truck);
    }
}

export class Bike extends Vehicle{
    constructor(regNumber : string , color : string){
        super(regNumber , color , VehicleType.Bike);
    }
} 

export class Car extends Vehicle{
    constructor(regNumber : string , color : string){
        super(regNumber , color , VehicleType.Car);
    }
}