import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifytoken = (req, res, next) => {
  const accesstoken = req.cookies.token || req.headers["x_access_token"];
  if (!accesstoken) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  jwt.verify(accesstoken, process.env.ACCESS_TOKEN_SECRETS, (err, decoded) => {
    if (err) res.status(403).json({ msg: err.message });
    next();
  });
};
