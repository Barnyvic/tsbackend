import express from "express";
import {
  getCars,
  findCar,
  filterCars,
  topSpeedCars,
  addCar,
  deleteCar,
} from "../controllers/Cars.controllers";

const router = express.Router();

router.route("/").get(getCars).post(addCar);
router.route("/cars/search/:id").get(findCar);
router.route("/cars/topspeed").get(topSpeedCars);
router.route("/cars/horsepower").get(filterCars);
router.route("/cars/delete/:id").delete(deleteCar);
export default router;
