// models/userModel.js
let users = [];
let currentId = 1;

export const getAllUsers = () => users;

export const getUserById = (id) => users.find((user) => user.id === id);

export const createUser = (name, email) => {
  const newUser = { id: currentId++, name: name, email: email };
  users.push(newUser);
  return newUser;
};

export const updateUser = (id, name, email) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { id, name, email };
    return users[index];
  }
  return null;
};

export const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    return deletedUser[0];
  }
  return null;
};
