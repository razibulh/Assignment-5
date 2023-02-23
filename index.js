
//A. Comparing BMI between two persons

let m1 = 78; //mass of Lucas
let m2 = 92; //mass of Peter
let h1 = 1.69; //height of Lucas
let h2 = 1.95; //height of Peter

let lucas_bmi = m1 / (h1 * h1);
let peter_bmi = m2 / (h2 * h2);

console.log("The BMI of Lucas is : " +lucas_bmi);
console.log("The BMI of Peter is : " +peter_bmi);
if(lucas_bmi>peter_bmi){
    console.log("Lucas's BMI is higher than Peter's BMI.");
}
else{
     console.log("Peter's BMI is higher than Lucas's BMI.");
}
const high = peter_bmi>lucas_bmi;

console.log("Peter's BMI is higher than Lucas's BMI that is " +high);

// B. Converting temperatures

let CT = 3; //assign celsius temperature
const farenheit_temp = (CT*1.8)+32;
console.log(`NN C is ${farenheit_temp} NN F.`);

let FT = 38; //assign fahrenheit temperature
const celsius_temp = (38-32)/1.8;
console.log(`NN F is ${celsius_temp} NN C.`);

//C. Using conditional operator


console.log(`Who has the higher BMI ?`);

console.log(`Just see the result by entering their BMIs...!`);

let lucas_comp = prompt(`Please Enter the Lucas's BMI : `);
let peter_comp = prompt(`Now Please Enter the Peter's BMI : `);

 

if(lucas_comp>peter_comp){
    console.log(`Lucas's BMI is higher than Peter's BMI.`);
}

else{
    console.log(`Peter's BMI is higher than Lucas's BMI.`);
}

//D.  Converting temperature by creating two functions

function ConvertCelsiusToFahrenheit(celsius) 
{
  const cTemp = celsius;
  const cToFahr = (cTemp * 1.8) + 32;
  const message = `${cTemp} NN C is ${cToFahr} NN F.`;
    console.log(message);
}

function ConvertFahrenheitToCelsius(fahrenheit) 
{
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) / 1.8;
  const message = `${fTemp} NN F is ${fToCel} NN C.`;
    console.log(message);
} 
ConvertCelsiusToFahrenheit(60); //function 1 called
ConvertFahrenheitToCelsius(45); //function 2 called






