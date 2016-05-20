// Vehicle needs to be defined before Car in file :) otherwise chrome throws exception
class Vehicle{
    update(price) {
        console.log('vehicle update has been called')
    }
}

class Car extends Vehicle {
    // it will be executed as C# constructor
    constructor(color, price) {
        console.log('constructor method has been called')

        //interesting that Vehicle class doesn't has a constructor, but no exception is thrown.
        super(color, price);

        this.car = Car.defaultVehicle();
        this.wheels = [];
        this.passengers = [];
        //...
    }

    update(price) {
        //...
        console.log('update has been called')
        super.update(price);
    }

    static defaultVehicle() {
        console.log('static method has been called')
        return new Vehicle();
    }
}



var c = new Car("blue",12);
c.update(14);

var dVeh = Car.defaultVehicle();