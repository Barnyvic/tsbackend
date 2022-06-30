import { Data } from "../../Data";
import { ICars } from "../interface/Icar";
import { AccoutCars } from "../interface/Account_cars";

// get all cars
const getCars = (req: any, res: any) => {
  const allCars = Data.Cars.map((car: ICars) => {
    return {
      Id: car._id,
      NameofCar: car.Name,
      MPG: car.Miles_per_Gallon,
      Cylinders: car.Cylinders,
      Displacement: car.Displacement,
      HorsePower: car.Horsepower,
      Weight: car.Weight_in_lbs,
      Acceleration: car.Acceleration,
      Year: car.Year,
      Origin: car.Origin,
    };
  });
  res.send(allCars).status(200);
};

// Find the top speed cars
const topSpeedCars = (req: any, res: any) => {
  const topSpeedCars = Data.Cars.sort((a: ICars, b: ICars) => {
    return b.Acceleration - a.Acceleration;
  }).slice(0, 5);
  res.send(topSpeedCars).status(200);
};

// filter cars by year
const filterCars = (req: any, res: any) => {
  const cars = Data.Cars.filter((car: ICars) => car.Horsepower > 185);
  if (cars) {
    res.send(cars).status(200);
  } else {
    res.send("Car not found").status(404);
  }
};

// finding a particular car
const findCar = (req: any, res: any) => {
  const car = Data.Cars.find((car: ICars) => car._id === Number(req.params.id));
  if (car) {
    res.send(car).status(200);
  } else {
    res.send("Car not found").status(404);
  }
};

export { getCars, findCar, filterCars, topSpeedCars };
