import { useState, useEffect } from "react";
import quotesData from "../quotesData";

const Quotes = () => {
  const [aQuote, setAQuote] = useState(
    quotesData[Math.floor(Math.random() * quotesData.length)]
  );

  let lastIndex;

  const getRandIndex = () => {
    return Math.floor(Math.random() * quotesData.length);
  };

  const getRandQuote = () => {
    const randIndex = getRandIndex();
    if (lastIndex !== randIndex) {
      lastIndex = randIndex;
      return setAQuote(quotesData[randIndex]);
    }
    getRandQuote();
  };

  const generateColor = () => {
    const r = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    const g = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    const b = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");

    return r + g + b;
  };

  useEffect(() => {
    const color = generateColor();
    document.body.style.backgroundColor = "#" + color;
  });

  return (
    <>
      <div className="container">
        <h1>{aQuote.quote}</h1>
        <p>{aQuote.author}</p>
        <button onClick={getRandQuote}>New Quote</button>
      </div>
    </>
  );
};

export default Quotes;
