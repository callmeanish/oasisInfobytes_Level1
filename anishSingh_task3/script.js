const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", convertTemperature);

function convertTemperature(){

const input = document.getElementById("temperature").value;

const unit = document.getElementById("unit").value;

const error = document.getElementById("error");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

error.textContent="";

celsiusResult.textContent="";
fahrenheitResult.textContent="";
kelvinResult.textContent="";

if(input===""){

error.textContent="Please enter a temperature.";

return;

}

const temp = parseFloat(input);

if(isNaN(temp)){

error.textContent="Only numeric values are allowed.";

return;

}

let celsius;
let fahrenheit;
let kelvin;

if(unit==="celsius"){

if(temp < -273.15){

error.textContent="Temperature cannot be below absolute zero (-273.15°C).";

return;

}

celsius=temp;
fahrenheit=(temp*9/5)+32;
kelvin=temp+273.15;

}

else if(unit==="fahrenheit"){

if(temp < -459.67){

error.textContent="Temperature cannot be below absolute zero (-459.67°F).";

return;

}

fahrenheit=temp;
celsius=(temp-32)*5/9;
kelvin=celsius+273.15;

}

else{

if(temp < 0){

error.textContent="Temperature cannot be below absolute zero (0 K).";

return;

}

kelvin=temp;
celsius=temp-273.15;
fahrenheit=(celsius*9/5)+32;

}

celsiusResult.textContent=`Celsius : ${celsius.toFixed(2)} °C`;

fahrenheitResult.textContent=`Fahrenheit : ${fahrenheit.toFixed(2)} °F`;

kelvinResult.textContent=`Kelvin : ${kelvin.toFixed(2)} K`;

}