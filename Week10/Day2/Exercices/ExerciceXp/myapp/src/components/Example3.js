import Data from "../data/data2.json";

const Example3 = (props) => {
  const data = Data.Experiences;
  console.log(data);
  return (
    <>
      {data.map((item) => {
        return (
          <div>
            <img src={item.logo} />
            <div>
              <a href={item.url}>{item.companyName}</a>
            </div>
            {item.roles.map((item2) => {
              return (
                <div>
                  <h3>{item2.title}</h3>
                  <p>
                    {item2.endDate} {item2.location}
                  </p>
                  <p>{item2.description}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Example3;
