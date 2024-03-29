// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function creat_car(Manufacturer: string, Model: string, ...Properties: [string, any][]): any {
    const car: any = {
        Manufacturer,
        Model,
    };
    for(const [key, value] of Properties) {
        car[key] = value
    }
    return car;
}

// Examples.

const my_car = creat_car("Toyota","Corolla",["color","Black"], ["Optional Feature","sunroof"],["speed","280 km/hour"])

console.log(my_car)

