// Vehicle needs to be defined before Car in file :) otherwise chrome throws exception
class Vehicle{
    update(price) {

    }
}

class Car extends Vehicle {
    constructor(color, price) {
        super(color, price);

        this.car = Car.defaultVehicle();
        this.wheels = [];
        this.passengers = [];
        //...
    }

    update(price) {
        //...
        super.update(price);
    }

    static defaultVehicle() {
        return new Vehicle();
    }
}



var c = new Car("blue",12);
c.update(14);

var dVeh = Car.defaultVehicle();