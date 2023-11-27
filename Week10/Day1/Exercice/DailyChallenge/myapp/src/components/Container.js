import { useState } from "react";
import Forms from "./Form";
import Display from "./Display";

const Container = (props) => {
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const aForm = {};

    console.log(e);

    for (const item of e.target) {
      if (item.type === "checkbox") {
        aForm[item.name] = item.checked;
      } else {
        aForm[item.name] = item.value;
      }
    }

    setForm(aForm);
  };

  return (
    <>
      <Forms handleSubmit={handleSubmit} />
      <hr />
      <Display form={form} />
    </>
  );
};

export default Container;
