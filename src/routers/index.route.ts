import express from "express";
import {
  getCars,
  findCar,
  filterCars,
  topSpeedCars,
} from "../controllers/Cars.controllers";

const router = express.Router();

router.route("/").get(getCars);
router.route("/cars/search/:id").get(findCar);
router.route("/cars/topspeed").get(topSpeedCars);
router.route("/cars/year").get(filterCars);

export default router;
