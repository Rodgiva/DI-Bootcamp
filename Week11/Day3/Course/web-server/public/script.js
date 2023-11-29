fetch("http://localhost:3001/api/products/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    render(data);
  });

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div>${item.name} ${item.price}</div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
};
