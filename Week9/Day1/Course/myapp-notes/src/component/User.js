import './User.css'

const User = (props) => {
  const { name, username, email, adress } = props.info;
  return (
    <div className="userstyle">
      <h1>User</h1>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      {/* <p>Adress: {adress.city}</p> */}
    </div>
  );
};

export default User;
