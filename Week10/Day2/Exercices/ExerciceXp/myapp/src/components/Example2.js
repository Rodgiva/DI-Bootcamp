import Data from "../data/data2.json";

const Example2 = (props) => {
  const data = Data.Skills;
  console.log(data);
  return (
    <>
      <h1>Example 2</h1>
      {data.map((item) => {
        return (
          <div>
            <h2>{item.Area}</h2>
            <ul>
              {item.SkillSet.map((item2) => {
                return <li>{item2.Name}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Example2;
