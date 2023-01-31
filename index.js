const container = document.querySelector("#container");
const defaultSize = 16;
let dDiv = [];
let iV;



/* Input Range button slider value */
const value = document.querySelector("#value");
const input = document.querySelector("#inputRange");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = (event.target.value + "x" + event.target.value);
  iV = event.target.value;
  makeRows(iV, iV);
  console.log(iV);
});



/* function to generate canvas blocks */
function makeRows(rows, cols) {
  dDiv = document.querySelectorAll("div.grid-item");
  dDiv.forEach(div => div.remove());
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  let a = dDiv.length;
  if(a > (rows * cols)) {
      dDiv.forEach(div => div.remove());
    } else {
  for(c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
  }
};

/* mouse over effect */
container.addEventListener('mouseover', event => {
let target = event.target
let rbgPercentValue = parseInt(target.dataset.percent);
if (isNaN(rbgPercentValue)) rbgPercentValue = 100;
if (rbgPercentValue >= 10) {
    rbgPercentValue -= 10;
    target.dataset.percent = rbgPercentValue;
}
    let rgbColor = `rgb(${rbgPercentValue}%,${rbgPercentValue}%,${rbgPercentValue}%)`

    if (target !== container) {
        target.style['background'] = rgbColor;
    }
});




window.onload = () => {
makeRows(16, 16);
}