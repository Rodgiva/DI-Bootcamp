const Display = (props) => {
  return (
    <>
      <div className="container">
        <h2>Entered information:</h2>
        <p>
          <i>Your name: {props.form.firstName}</i>
        </p>
        <p>
          <i>Your age: {props.form.lastName}</i>
        </p>
        <p>
          <i>Your gender: {props.form.age}</i>
        </p>
        <p>
          <i>Your destination: {props.form.destination}</i>
        </p>
        <p>
          <i>Your dietary restrictions:</i>
        </p>
        **Nuts free : {props.form.nuts ? "Yes" : "No"}
        <br />
        **Lactose free : {props.form.lactose ? "Yes" : "No"}
        <br />
        **Vegan meal : {props.form.vegan ? "Yes" : "No"}
      </div>
    </>
  );
};

export default Display;
