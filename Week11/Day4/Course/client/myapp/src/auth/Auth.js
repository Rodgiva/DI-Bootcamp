import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = (props) => {
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    verify();
  }, []);

  const verify = async () => {
    try {
      const res = await axios.get("/users/verify");
      if (res.status === 201) redirect(true);
    } catch (error) {
      console.log(error.res.data);
      setRedirect(false);
      navigate("/login");
    }
  };

  return redirect ? props.children : <h2>Unauthorized user</h2>;
};

export default Auth;
