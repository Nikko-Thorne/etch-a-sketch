const container = document.querySelector("#container");
const defaultSize = 16;
let dDiv = [];
let iV = 16;
let rgbColor;
let cValue;


let modes = {colorMode: false, shadeMode: true, rainbowMode: false, erasorMode: false};

// button handling
function modeHandler(modes, button) {
  if(button === "cButton") {
    modes.colorMode = true;
    modes.shadeMode = false;
    modes.rainbowMode = false;
    modes.erasorMode = false;
  } else if (button === "sButton") {
    modes.colorMode = false;
    modes.shadeMode = true;
    modes.rainbowMode = false;
    modes.erasorMode = false;
  } else if (button === "rButton") {
    modes.colorMode = false;
    modes.shadeMode = false;
    modes.rainbowMode = true;
    modes.erasorMode = false;
  } else if (button === "eButton") {
    modes.colorMode = false;
    modes.shadeMode = false;
    modes.rainbowMode = false;
    modes.erasorMode = true;
  }
  return modes;
}


// Input Range button slider value 
const rvalue = document.querySelector("#rangeValue");
const rInput = document.querySelector("#inputRange");
rvalue.textContent = rInput.value;
rInput.addEventListener("input", (event) => {
  rvalue.textContent = (event.target.value + "x" + event.target.value);
  iV = event.target.value;
  makeRows(iV, iV);
  console.log(iV);
});

//Input color mode Value
let colorPicker = document.getElementById("colorValue");
colorPicker.addEventListener('input', function() {
  cValue = this.value;
  return cValue;
});

// function to generate canvas blocks 
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
  modes = {colorMode: false, shadeMode: true, rainbowMode: false, erasorMode: false};
};

//  mouse over effect 
container.addEventListener('mouseover', event => {
let target = event.target
let rbgPercentValue = parseInt(target.dataset.percent);
if(modes.shadeMode === true) {
if (isNaN(rbgPercentValue)) rbgPercentValue = 100;
if (rbgPercentValue >= 10) {
    rbgPercentValue -= 10;
    target.dataset.percent = rbgPercentValue;
}
  rgbColor = `rgb(${rbgPercentValue}%,${rbgPercentValue}%,${rbgPercentValue}%)`
  if (target !== container) {
  target.style['background'] = rgbColor;
  }
} else  
  (modes.colorMode === true) 
  target.style['background'] = cValue;
});

window.onload = () => {
makeRows(16, 16);
}