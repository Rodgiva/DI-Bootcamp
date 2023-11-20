import Data from "../data/data2.json";

const Example1 = (props) => {
  const data = Data.SocialMedias;
  return (
    <>
      <h1>Example 1</h1>
      <ul>
        {data.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default Example1;
