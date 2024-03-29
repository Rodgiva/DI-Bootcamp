import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";

const Nav = (props) => {
  return (
    <>
      <div>
        <Stack spacing={2} direction={"row"}>
          <Button component={Link} to="/">
            Home
          </Button>
          <Button component={Link} to="/login">
            Login
          </Button>
          <Button component={Link} to="/register">
            Register
          </Button>
          <Button component={Link} to="/secure">
            Info
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default Nav;
