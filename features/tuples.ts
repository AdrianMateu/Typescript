const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[2] = 40;
pepsi[1] = 'brown';

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  hosepower: 400,
  weight: 3354,
};
