import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";
import { useEffect, useState } from "react";

const Users = (props) => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const [info, setInfo] = useState({})

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const getInfos = (id) => {

  }

  return (
    <>
      <h1>Users</h1>
      {users &&
        users.map((user) => (
          <article key={user.id} onClick={() => getInfos(user.id)}>
            <h3>{user.name}</h3>
          </article>
        ))}
    </>
  );
};

export default Users;
