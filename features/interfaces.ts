interface IVehicle {
  name: string;
  year: Date;
  broken: boolean;
  sumary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  sumary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: IVehicle): void => {
  console.log(vehicle.sumary());
};

printVehicle(oldCivic);
