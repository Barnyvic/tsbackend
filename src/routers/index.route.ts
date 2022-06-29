import express from "express";
import getCars from "../controllers/Cars.controllers";
const router = express.Router();

router.route("/").get(getCars);

export default router;
