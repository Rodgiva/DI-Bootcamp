import { register } from "../model/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const _login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const row = await login(email.toLowerCase());

    if (row.lenght === 0) {
      return res.status(404).json({ msg: "Email not found" });
    }

    const match = bcrypt.compareSync(password + "", row[0].password);
    if (!match) {
      return res.status(404).json({ msg: "Wrong password" });
    }

    const userid = row[0].id;
    const useremail = row[0].email;

    const secret = process.env.ACCESS_TOKEN_SECRETS;

    const accesstoken = jwt.sign({ userid, useremail }, secret, {
      expiresIn: "60s",
    });

    res.cookie("token", accesstoken, {
      httpOnly: true,
      maxAge: 60 * 1000,
    });

    res.json({ accesstoken });
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "Something wen wrong..." });
  }
};

export const _register = async (req, res) => {
  const { email, password } = req.body;
  const loweremail = email.toLowerCase();
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password + "", salt);

  try {
    const row = await register(loweremail, hash);
    res.json(row);
  } catch (error) {
    console.log("_register => ", error);
    res.status(404).json({ msg: "email allready exist" });
  }
};
