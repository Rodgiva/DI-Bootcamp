const HomeScreen = (props) => {
  const aPostRequest = async () => {
    const thisHardcodedStringifiedJsonData = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };

    const objBody = {
      method: "post",
      mode: "cors",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(thisHardcodedStringifiedJsonData),
    };

    try {
      const res = await fetch(
        `https://webhook.site/71e4efd0-b2ce-4573-ba52-fea393c9cc18`,
        objBody
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={aPostRequest}>Click Me!</button>
    </>
  );
};

export default HomeScreen;
