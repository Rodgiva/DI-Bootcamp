import { useState, useEffect } from "react";

const UsersFunction = () => {
  const [users, setUsers] = useState([]);
  const [val, setVal] = useState(null);

  useEffect(() => {
    console.log("effect=>");
    if (val) {
      getAllUsers();
    }
    getAllUsers();
  }, [val]);

  const getAllUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        {/* <button onClick={() => getAllUsers()}>Get Users</button> */}
        <input type="text" onInput={(e) => setVal(e.target.value)} />
      </div>
      {users.map((item) => {
        return (
          <div key={item.id}>
            <h4>
              {item.name}, {item.email}
            </h4>
          </div>
        );
      })}
    </>
  );
};

export default UsersFunction;
