import db from "../config/db.js";

// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the the database
// POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
// GET /users: Retrieve a list of all registered users from the database
// GET /users/:id: Retrieve a specific user by ID from the database
// PUT /users/:id: Update a user’s information by ID in the database

// Tables creation (no relation one-to-one used, simple 2 independant tables => we will add 2 times the same data "username")

const _getAllUsers = () => {
  return db("users").select(
    "id",
    "username",
    "first_name",
    "last_name",
    "email"
  );
};

const _getOneUser = (id) => {
  return db("users")
    .select("id", "username", "first_name", "last_name", "email")
    .where({ id });
};

const _addUser = async (username, first_name, last_name, email) => {
  const trx = await db.transaction();
  try {
    await db("users")
      .insert(
        { username, first_name, last_name, email },
        ["username", "first_name", "last_name", "email"]
      )
      .transacting(trx);
    await trx.commit();
  } catch (err) {
    console.log(err);
    await trx.rollback();
  }
};

const _updateUser = async (id, username, first_name, last_name, email) => {
  const trx = await db.transaction();
  try {
    await db("users")
      .update(
        { username, first_name, last_name, email },
        ["id", "username", "first_name", "last_name", "email"].where({ id })
      )
      .transacting(trx);
    await trx.commit();
  } catch (err) {
    console.log(err);
    await trx.rollback();
  }
};

const _getOnePswd = (username) => {
  console.log(username);
  return db("hashpwd").select("password").where({ username });
};

const _addPswd = (username, password) => {
  return db("hashpwd").insert({ username, password }, [
    "id",
    "username",
    "password",
  ]);
};

export { _getAllUsers, _getOneUser, _updateUser, _getOnePswd, _addPswd, _addUser };