import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../models/userModel.js";

export const getUsers = (req, res) => {
  const users = getAllUsers();
  res.json(users);
};

export const getUser = (req, res) => {
  const user = getUserById(parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

export const createUserHandler = (req, res) => {
  const { name, email } = req.body;
  const newUser = createUser(name, email);
  res.status(201).json(newUser);
};

export const updateUserHandler = (req, res) => {
  const { name, email } = req.body;
  const updatedUser = updateUser(parseInt(req.params.id), name, email);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

export const deleteUserHandler = (req, res) => {
  console.log(req.params.id);
  const deletedUser = deleteUser(parseInt(req.params.id));
  if (deletedUser) {
    res.json(deletedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
