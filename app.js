// https://www.omnicalculator.com/conversion/hours-to-seconds-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const secondsRadio = document.getElementById('secondsRadio');
const hoursRadio = document.getElementById('hoursRadio');

let seconds;
let hours = v; 

// labels of the inpust
const variable = document.getElementById('variable');

secondsRadio.addEventListener('click', function() {
  variable.textContent = 'Hours';
  hours = v;
  result.textContent = '';
});

hoursRadio.addEventListener('click', function() {
  variable.textContent = 'Seconds';
  seconds = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(secondsRadio.checked)
    result.textContent = `Seconds = ${computeseconds().toFixed(5)}`;

  else if(hoursRadio.checked)
    result.textContent = `Hours = ${computehours().toFixed(5)}`;
})

// calculation

function computeseconds() {
  return Number(hours.value) * 3600;
}

function computehours() {
  return Number(seconds.value) / 3600;
}