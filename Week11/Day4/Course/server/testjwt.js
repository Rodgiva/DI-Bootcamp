import jwt, { decode } from "jsonwebtoken";

// zivuch@gmail.com

// CREAT TOKEN
const token = jwt.sign(
  { email: "avigdorpartouche@gmail.com", userid: 369 },
  "123456",
  {
    expiresIn: "60s",
  }
);

// console.log(token);

// VERIFY TOKEN
// https://jwt.io/ , copy the payload of the token created here
const newToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
jwt.verify(newToken, "123456", (err, decoded) => {
  if (err) return console.log(err.message);
  console.log(decoded);
});
