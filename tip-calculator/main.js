// Your scripts here

// What kind of things can you do with JavaScript in the browser?

// Get a reference to DOM elements
const billElement = document.getElementById('amount');
const tipElement = document.getElementById('percent');
const calculateButton = document.getElementById('calculate');

const tipTotal = document.getElementById('tip');
const total = document.getElementById('total');
// const pow_input = document.getElementById('input-pow');
// const num_display = document.getElementById('num-display');

// Set the content and style the Bill Input
billElement.value = 0.00;
billElement.style.color = 'black';

// Set the content and style the Bill Input
tipElement.value = 18;
billElement.style.color = 'black';


// Handle events

// Add an event listener to button_1
calculateButton.onclick = (elem) => {
  const bill = Number(billElement.value);
  const tipPercent = tipElement.value * 0.01;

  const tip = (tipPercent * bill).toFixed(2);
  tipTotal.innerHTML = tip;

  console.log("tip is a: " + typeof tip)
  console.log("bill is a: " + typeof bill)
  console.log(typeof Number(tip) + " tip")
  console.log(typeof Number(bill) + " bill")

  const grandTotal = (Number(tip) + bill);
  console.log(grandTotal);
  total.innerHTML = Number(grandTotal).toFixed(2);
};

// Add an event listener to button_2
// button_2.onclick = (e) => {
//   titleElement.style.color = '#dd2211';
//   titleElement.innerHTML = 'Pause!';
// };


//
//
// let numulation = 0;
//
// num_button.onclick = (e) => {
//   // get the value from the input
//   const num = num_input.value;
//   const pow = pow_input.value;
//   numulation += num * pow;
//   num_display.innerHTML = numulation;
// }