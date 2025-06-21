// console.log(Math.round(4.52));
// console.log(Math.ceil(4.52));
// console.log(Math.floor(4.52));
// console.log(Math.random() * 10 + 1);
// console.log(Math.floor(Math.random() * 255 + 1));
// console.log(Math.floor(Math.random() * 255 + 1));
// console.log(Math.floor(Math.random() * 255 + 1));

let colgenBtn = document.querySelector("#colgen");

colgenBtn.addEventListener("click", () => {
  let redColor = Math.floor(Math.random() * 255 + 1);
  let greenColor = Math.floor(Math.random() * 255 + 1);
  let blueColor = Math.floor(Math.random() * 255 + 1);
  let colorBox = document.querySelector("#color-box");
  
  colorBox.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
  colorBox.style.border= '3px solid rgb(255, 255, 255)';
  document.querySelector('#color').innerHTML = `rgb(${redColor}, ${greenColor}, ${blueColor})`
});