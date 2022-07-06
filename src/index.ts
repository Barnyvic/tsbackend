import express from "express";
import router from "./routers/index.route";
import bodyParser from "body-parser";
import cors from "cors";
const Port = 5000;

// Initializing express and router
const app = express();
app.use(router);
app.use(
  cors({
    origin: "*",
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
