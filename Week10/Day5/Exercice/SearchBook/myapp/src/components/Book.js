import { useRef, useContext } from "react";
import { AppContext } from "../App";

const Book = (props) => {
  const params = useRef("");
  const { data, setData } = useContext(AppContext);

  const getBooksRequest = async (param) => {
    const dataRes = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${param}`
    );
    const res = await dataRes.json();
    setData(res.items);
  };

  const dataOrdered = (order) => {
    if (data !== undefined) {
      if (order === "Newest") {
        return data.sort((a, b) => {
          const dateA = new Date(a.volumeInfo.publishedDate);
          const dateB = new Date(b.volumeInfo.publishedDate);
          return dateA.getTime() - dateB.getTime();
        });
      } else if (order === "Oldest") {
        return data.sort((a, b) => {
          const dateA = new Date(a.volumeInfo.publishedDate);
          const dateB = new Date(b.volumeInfo.publishedDate);
          return dateB.getTime() - dateA.getTime();
        });
      }
    }
  };

  return (
    <>
      <div className="search">
        <input ref={params} />
        <button
          onClick={() => {
            getBooksRequest(params.current.value);
          }}
        >
          Search
        </button>
        <select
          onChange={(e) => {
            setData(dataOrdered(e.target.value));
          }}
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>
    </>
  );
};

export default Book;
