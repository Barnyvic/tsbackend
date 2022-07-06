import express from "express";
import {
  getCars,
  findCar,
  filterCars,
  topSpeedCars,
  addCar,
  deleteCar,
  updateCar,
} from "../controllers/Cars.controllers";

import {
  getAccounts,
  CreateAccount,
  deleteAccount,
} from "../controllers/Account-Cars.controllers";

const router = express.Router();

// routes for cars
router.route("/").get(getCars).post(addCar);
router.route("/cars/search/:id").get(findCar);
router.route("/cars/topspeed").get(topSpeedCars);
router.route("/cars/horsepower").get(filterCars);
router.route("/cars/delete/:id").delete(deleteCar);
router.route("/cars/update/:id").put(updateCar);

// Routes for Accounts and Cars
router.route("/accounts").get(getAccounts).post(CreateAccount);
router.route("/accounts/delete/:id").delete(deleteAccount);

export default router;
