import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import data from "../data.json";

const GameCard = (props) => {
  const [superheroes, setSuperheroes] = useState([]);
  const [superheroesId, setSuperheroesId] = useState([]);
  const { score, setScore } = useContext(AppContext);

  const [highScore, setHighScore] = useState(0);

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setSuperheroes(shuffle(data.superheroes));
  }, []);

  const handleClickOnCard = (id) => {
    if (superheroesId.find((item) => item === id) === undefined) {
      setSuperheroesId([...superheroesId, id]);
      setScore(score + 1);
      if (score >= highScore) {
        setHighScore(score);
      }
    } else {
      setSuperheroesId([]);
      setScore(0);
    }
    setSuperheroes(shuffle(data.superheroes));
  };

  return (
    <>
      <div className="container">
        {superheroes.map((item) => (
          <div
            className="hero"
            onClick={() => handleClickOnCard(item.id)}
            key={item.id}
          >
            <img className="heroImg" src={item.image} />
            <div className="infoHero">
              <b>Name:</b> {item.name}
              <br />
              <b>Occupation:</b> {item.occupation}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GameCard;
