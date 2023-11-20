const getHello = async (req, res) => {
  try {
    res.json({ msg: "Hello from Express :)" });
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "No Hello :(" });
  }
};

const world = async (req, res) => {
  const { input } = req.body;
  try {
    console.log(input);
    res.json({
      msg: `I received your POST request. This is what you sent me: ${input}`,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "No Hello :(" });
  }
};

export { getHello, world };
