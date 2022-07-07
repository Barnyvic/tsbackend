import express from "express";
import router from "./routers/index.route";
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
app.use(express.urlencoded({ extended: false }));

// Starting the server
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
