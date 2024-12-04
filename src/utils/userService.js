import users from "../data/users.json";

export async function fetchUsers() {
  return users;
}

export async function addUser(newUser) {
  throw new Error("Cannot add user: JSON file is static.");
}

export async function validateUser(email, password) {
  return users.find(user => user.email === email && user.password === password);
}
