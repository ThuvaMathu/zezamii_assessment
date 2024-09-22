import dotenv from "dotenv";
import express from "express";
import { logger } from "./middlewares/logger.js";
import userRouters from "./routers/userRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(express.json());
app.use(logger);

//Router
app.use("/users", userRouters);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
