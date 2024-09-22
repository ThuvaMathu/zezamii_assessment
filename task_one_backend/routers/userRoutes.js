import express from "express";
import {
  getUsers,
  getUser,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} from "../controllers/userController.js";
import { validateUser } from "../middlewares/validateUser.js";

const userRouters = express.Router();

userRouters.get("/", getUsers);
userRouters.get("/:id", getUser);
userRouters.post("/", validateUser, createUserHandler);
userRouters.put("/:id", validateUser, updateUserHandler);
userRouters.delete("/:id", deleteUserHandler);

export default userRouters;
