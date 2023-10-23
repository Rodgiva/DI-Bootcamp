// let row = 2

// function insertRow() {
//     row++;
//     const table = document.getElementById("sampleTable")

//     let tr = document.createElement("tr")
//     for (let i = 1; i <= 2; i++) {
//         let td = document.createElement("td")

//         td.innerText = `Row${row} cell${i}`
//         tr.appendChild(td)
//     }
//     table.appendChild(tr)
// }

let div = document.getElementsByTagName("div")[0];
let btn = document.getElementById("jsstyle");

function btnClick(e) {
  alert("click 1");
  e.target.style.backgroundColor = "blue";
  // e.stopPropagation()
}

function btnClick2(e) {
  alert("click 2");
  e.target.style.backgroundColor = "red";
  e.stopPropagation();
}

// function btnClick3(e) {
//     alert("click 3")
//     e.stopPropagation()
// }

// function btnClick4(e) {
//     alert("click 4")
//     // e.stopPropagation()
// }

btn.addEventListener("click", btnClick);
btn.addEventListener("click", btnClick2);
// btn.addEventListener("click", btnClick3);
// btn.addEventListener("click", btnClick4);
