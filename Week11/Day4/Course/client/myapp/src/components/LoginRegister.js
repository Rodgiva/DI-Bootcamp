import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Box, TextField, Button } from "@mui/material";
import axios from "axios";

import { AppContext } from "../App";

const LoginRegister = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const { setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const loginRegister = async () => {
    if (props.title === "Register") {
      try {
        const res = await axios.post("/users/register", { email, password });
        if (res.status === 200) {
          setMsg("");
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        setMsg(error.res.data.msg);
      }
    } else if (props.login === "Login") {
      try {
        const res = await axios.post("/users/login", { email, password });
        if (res.status === 200) {
          console.log(res.data);
          setToken(res.data);
          setMsg("");
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        setMsg(error.res.data.msg);
      }
    } else {
    }
  };

  return (
    <>
      <div>
        <h2>{props.title}</h2>
        <Box component={"form"} sx={{ m: 1 }} noValidate autoComplete="off">
          <TextField
            sx={{ m: 1 }}
            id="email"
            type="email"
            label="Enter Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ m: 1 }}
            id="password"
            type="password"
            label="Enter Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button variant="filled" onClick={loginRegister}>
          {props.title}
        </Button>
        <div>{msg}</div>
      </div>
    </>
  );
};

export default LoginRegister;
