const Forms = (props) => {
  let { handleSubmit } = props;

  return (
    <>
      <h1>Sample form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          className="input"
        />
        <br />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          className="input"
        />
        <br />
        <input name="age" type="number" placeholder="Age" className="input" />
        <br />
        <input type="radio" value="male" name="gender" />
        Male
        <br />
        <input type="radio" value="female" name="gender" />
        Female
        <br />
        Select your destination
        <br />
        <select name="destination">
          <option value="">Please Choose a destination</option>
          <option value="Thailand">Thailand</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
        </select>
        <br />
        <br />
        Dietary restrictions:
        <br />
        <input name="nuts" type="checkbox" value="nuts"/> Nuts free
        <br />
        <input name="lactose" type="checkbox" value="lactose"/> Lactose free
        <br />
        <input name="vegan" type="checkbox" value="vegan"/> Vegan
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Forms;
