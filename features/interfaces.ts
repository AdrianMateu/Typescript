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

interface IReportable {
  sumary(): string;
}

const oldAstra = {
  name: 'astra',
  year: new Date(),
  broken: true,
  sumary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  sumary(): string {
    return `My drink has: ${this.sugar} grams of sugar !`;
  },
};

const printSummary = (item: IReportable): void => {
  console.log(item.sumary());
};

printSummary(oldAstra);
printSummary(drink);
