import { useContext } from "react";
import { AppContext } from "../App";

const BookList = (props) => {
  const { data } = useContext(AppContext);
  const DisplayBooks = () => {
    if (data !== undefined) {
      return data.map((item) => (
        <div key={item.id} className="cardBook">
          <img src={item.volumeInfo.imageLinks.thumbnail} className="image" />
          <div className="bookInfo">
            <p className="titleBook">{item.volumeInfo.title}</p>
            <div>
              {item.volumeInfo.authors !== undefined ? (
                <p>Author: {item.volumeInfo.authors.join(", ")}</p>
              ) : (
                <></>
              )}
            </div>
            <p>Published: {item.volumeInfo.publishedDate}</p>
          </div>
        </div>
      ));
    } else {
      return <div></div>;
    }
  };

  console.log("bip");

  return (
    <>
      <div className="container">
        <DisplayBooks />
      </div>
    </>
  );
};
export default BookList;
