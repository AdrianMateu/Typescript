class Vehicle {
  // public drive(): void {
  //   console.log('chugga chugga');
  // }
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color);
  }
  private drive(): void {
    console.log('broom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(1, 'red');

car.startDrivingProcess();

console.log(car);
