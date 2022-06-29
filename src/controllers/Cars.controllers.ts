import { Data } from "../../Data";

interface ICar {
  _id: number;
  Name: string;
  Miles_per_Gallon: number;
  Cylinders: number;
  Displacement: number;
  Weight_in_lbs: number;
  Acceleration: number;
  Year: string;
  Origin: string;
}

// get all cars
const getCars = (req: any, res: any) => {
  const allCars = Data.Cars.map((car: ICar) => {
    return {
      Id: car._id,
      NameofCar: car.Name,
      MPG: car.Miles_per_Gallon,
      Cylinders: car.Cylinders,
      Displacement: car.Displacement,
      Weight: car.Weight_in_lbs,
      Acceleration: car.Acceleration,
      Year: car.Year,
      Origin: car.Origin,
    };
  });
  res.send(allCars).status(200);
};

// finding a particular car
const findCar = (req: any, res: any) => {
  const car = Data.Cars.find((car: ICar) => car._id === req.params.id);
  if (car) {
    res.send(car).status(200);
  } else {
    res.send("Car not found").status(404);
  }
};

export default getCars;
findCar;
