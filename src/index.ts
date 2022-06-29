import express from "express";
import router from "./routers/index.route";
import bodyParser from "body-parser";
import cors from "cors";
const Port = 5000;

// Initializing express and router
const app = express();
app.use(router);
app.use(cors());

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
