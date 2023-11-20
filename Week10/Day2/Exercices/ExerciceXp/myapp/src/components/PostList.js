import Data from "../data/data.json";

const PostList = (props) => {
  console.log(Data);
  return (
    <>
      <h1>Post List</h1>
      {Data.map((item) => {
        return (
          <div>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        );
      })}
    </>
  );
};

export default PostList;
