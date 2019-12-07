const calculateFuelCost = (mass) => {
    const fuelCost = Math.round(mass / 3) - 2;
    console.log(fuelCost);
    return fuelCost;
}

calculateFuelCost(12);