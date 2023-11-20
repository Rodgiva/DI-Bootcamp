import { useState, useEffect } from "react";

const Inputs = (props) => {
  const [inputs, setInputs] = useState({
    fName: "",
    lName: "",
    phone: "",
    email: "",
  });

  const validateInputs = () => {
    if (
      inputs.fName !== "" ||
      inputs.lName !== "" ||
      inputs.phone !== "" ||
      inputs.email !== ""
    ) {
      const emailRegex = new RegExp(
        "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"
      );

      const phoneRegex = new RegExp("^05[0-9]+[0-9]{7,}$");

      if (!phoneRegex.test(inputs.phone)) {
        return "Invalid phone number";
      }

      if (!emailRegex.test(inputs.email)) {
        return "Invalid email";
      }

      return "Done!";
    } else {
      return "Please fill the inputs fields.";
    }
  };

  return (
    <>
      <label htmlFor="">First Name</label>
      <input
        type="text"
        onChange={(e) =>
          setInputs({
            fName: e.target.value,
            lName: inputs.lName,
            phone: inputs.phone,
            email: inputs.email,
          })
        }
      />
      <label htmlFor="">Last Name</label>
      <input
        type="text"
        onChange={(e) =>
          setInputs({
            fName: inputs.fName,
            lName: e.target.value,
            phone: inputs.phone,
            email: inputs.email,
          })
        }
      />
      <label htmlFor="">Phone</label>
      <input
        type="text"
        onChange={(e) =>
          setInputs({
            fName: inputs.fName,
            lName: inputs.lName,
            phone: e.target.value,
            email: inputs.email,
          })
        }
      />
      <label htmlFor="">Email</label>
      <input
        type="text"
        onChange={(e) =>
          setInputs({
            fName: inputs.fName,
            lName: inputs.lName,
            phone: inputs.phone,
            email: e.target.value,
          })
        }
      />
      <input
        type="button"
        value="Submit"
        style={{ marginTop: "20px" }}
        onClick={() => {
          console.log(validateInputs());
        }}
      />
    </>
  );
};

export default Inputs;
