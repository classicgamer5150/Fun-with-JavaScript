window.onload = function () {
    document
        .querySelector("#tabContainer")
        .addEventListener("click", handleTabClick);
    document.querySelector(".tab").click(); 
    //listener for buttons
    let button = document.querySelector("#vowelButton");
    button.addEventListener("click", handleButtonClick);
    let button1 = document.querySelector("#choclatebars");
    button1.addEventListener("click", snickersSolution);
    let button2 = document.querySelector("#convert");
    button2.addEventListener("click", convertBinary);
    let button3 = document.querySelector("#Run");
    button3.addEventListener("click", MinMax);
    let button4 = document.querySelector("#getvalues");
    button4.addEventListener("click", GetValues);
    let button5 = document.querySelector("#lookkey");
    button5.addEventListener("click", GetKey);
    let button6 = document.querySelector("#printstars");
    button6.addEventListener("click", GetStars);
    let button7 = document.querySelector("#starsrun");
    button7.addEventListener("click", GetStarsRun);
    let button8 = document.querySelector("#ship");
    button8.addEventListener("click", GetShipPay);
    let button9 = document.querySelector("#triangletype");
    button9.addEventListener("click", GetTriangle);

};

// (Must declare parameter because we need the mouse click event.)
function handleTabClick(evt) {
    // format the selected tab
    let tab = evt.target;
    deselectAllTabs();
    tab.classList.add("active");

    // reveal the content section with an ID that corresponds to the active tab.
    let id = tab.innerHTML; // eg, Part B
    id = id.replace(" ", "_"); // Part_B
    hideAllSections();
    document.querySelector("#" + id).classList.remove("hidden"); // show #Part_B
}

function deselectAllTabs() {
    let tabs = document.querySelectorAll(".tab");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
}

function hideAllSections() {
    let sections = document.querySelectorAll(".tabContent");
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.add("hidden");
    }
}
//Test function provided by Mr. Monk
function handleButtonClick() {
    //1. Get the input string.
    let inputStr = document.querySelector("#vowelInput").value;
    //console.log(inputStr);

    //2. Count the vowels.
    let vowelCount = 0;
    let upperStr = inputStr.toUpperCase();
    for (let i = 0; i < upperStr.length; i++) {
        let ch = upperStr.charAt(i);
        if (
            ch === "A" ||
            ch === "E" ||
            ch === "I" ||
            ch === "O" ||
            ch === "U"
        ) {
            vowelCount++;
        }
    }
    console.log(vowelCount);

    //3. Create a new string with the vowels replaced by stars.
    let newStr = "";
    for (let i = 0; i < upperStr.length; i++) {
        let ch = upperStr.charAt(i);
        if (
            ch === "A" ||
            ch === "E" ||
            ch === "I" ||
            ch === "O" ||
            ch === "U"
        ) {
            // add a star
            newStr += "*";
        }
        else {
            newStr += inputStr.charAt(i); // works because inputStr and upperStr are the same length.
            //add the character from the original string
        }
    }
    console.log(newStr);

    //4. Put the answers from 2 and 3 in the output area.
    document.querySelector("#results").innerHTML = "<p>The number of vowels is " + vowelCount + "</p>";
    document.querySelector("#results").innerHTML += "<p>The new string is " + newStr + "</p>";
}
//SNICKERS function
function snickersSolution(){
document.querySelector("#results1").innerHTML = "";
let boxCost = 32.00;
let singleCost = 1.75;
console.log(singleCost);
  //get the user input
let inputBars = document.getElementById('numBars').value;
//validate that the number is 1 or higher, if not send alert to user
if(inputBars < 1)
{window.alert("The number of Snickers Bars must be 1 or more!");}
console.log(inputBars);
//commence formula
//determine how many boxes and drop beyond the decimal
let numboxes = inputBars / 24;
let numboxesT = Math.trunc(numboxes);
console.log(numboxes);
console.log(numboxesT);
//Get the remaining single bars
let singleBars = inputBars % 24;
console.log(singleBars);
//Calculate the total cost for boxes
let totalBoxCost = numboxesT * boxCost;
console.log(totalBoxCost);
//calculate the single bars
let totalSingleCost = singleBars * singleCost;
console.log(totalSingleCost);
//calculate the total cost
let totalCost = totalBoxCost + totalSingleCost;
//display the results for the user
document.querySelector("#results1").innerHTML += "<p>"  +
 "This is how many snickers bars you wanted:  " + inputBars +
  "</p>" + "<ul>" + "<li>" + "Number of boxes:  " +
  numboxesT + "</li>" + "<li>" + "Number of Single Bars:  " +
  singleBars + "</li>" + "<li>" + "Cost for Boxes:  $" +
  totalBoxCost.toFixed(2) + "</li>" + "<li>" + "Cost for Single Bars:  $" +
  totalSingleCost.toFixed(2) + "</li>" + "<li>"   +
  "Total Cost for your order:  $" + totalCost.toFixed(2) + "</li>" + "</ul>";

}//end snickers function

function convertBinary(){
    document.querySelector("#results2").innerHTML = "";
    //get the user input
let inputBiNum = document.querySelector("#inputconverter").value;
//create array split
let biArray = inputBiNum.split("");
let newarray = biArray.reverse();
let out = "";
let calc = "";
let numberZ = 0;
let stringEx = "";
let countDown = newarray.length -1;

console.log(newarray);
for(let i = 0; i <= biArray.length -1; i++){
if(newarray[i] === "0" || newarray[i] === "1")    
{
    if(newarray[i] === "1"){out = " 1x ";}else{out= " 0x ";}
    //show the exponet for display superscript sup
    stringEx += out + "2" + "<sup>" + countDown-- + "</sup>" + "+";
    console.log(stringEx);
    //exponet calc
    calc += "+" + +newarray[i] * Math.pow(2, i);
    console.log(calc);
    //calculation add the numbers
    numberZ += +newarray[i] * Math.pow(2, i);
    console.log(numberZ);
   
}
else{
    window.alert("Bad move buster! Enter a binary number!");
}
}
//output
document.querySelector("#results2").innerHTML += "<p>" + "You have entered the binary number " + inputBiNum + "</p>";
document.querySelector("#results2").innerHTML += "<p>" + "Your Decimal Number is " + numberZ;
document.querySelector("#results2").innerHTML += "<p>" + "Forumula using position (right to left) " + calc + "=" + numberZ;
document.querySelector("#results2").innerHTML += "<p>" + "Forumula  " + stringEx + "=" + numberZ;
}
function MinMax(){

    document.querySelector("#results5").innerHTML =  " ";
    let minNum = document.querySelector("#mininput");
    let firstValue = Number(minNum.value);
    let maxValue = +document.querySelector("#maxinput").value;
    
    
    let output = firstValue;
    if (firstValue > maxValue)
    {
       alert("ERROR: Starting Number greater than Ending number");
    }
    for (let i = firstValue + 1; i <= maxValue; i++)
    {
        output += "<li> " + i;
    
    }
    document.querySelector("#results5").innerHTML += "<p>" + "Input" + "<ul>" + "<li>" + "Min: " + firstValue + "</li>"
    + "<li>" + "Max:" + maxValue + "</li>" + "</ul>" + "</p>" + "<p>" + "Output " + "<br>" +
     "</p>" + "<p>" + "<ul>" + "<li>" + output + "</li>" + "</ul>" + "</p>";
    
    }

function GetValues(){
//clear the results
document.querySelector("#results4").innerHTML = "";
//get the input
let valInput = document.querySelector("#valueinput").value;
//split into string
let arrayNum = valInput.split(",");
let avgCount = 0; 
let sum = 0;
for(let i = 0; i < arrayNum.length; i++){
    avgCount++;
    console.log(arrayNum);
    sum = sum + Number(arrayNum[i]);
    console.log(sum);
}
console.log(sum);
console.log(avgCount);
let arrMin = Math.min(...arrayNum);
console.log(arrMin);
let arrMax = Math.max(...arrayNum);
console.log(arrMax);
//calculate average
let average = sum/avgCount;
console.log(average);
//output results
document.querySelector("#results4").innerHTML += "<ul>" + "<li>" + "Number of Values: " + avgCount + "</li>" +
"<li>" + "Total: " + sum + "</li>" +
"<li>" + "Average: "+ average + "</li>" +
"<li>" + "Smallest: " + arrMin + "</li>" +
"<li>" + "Largest: " +  arrMax + "</li>";

}

function GetKey(){
    //clear the results
    document.querySelector("#results6").innerHTML = "";
    let key = document.querySelector("#keyinput").value;
    let answer = 0;
    let num = document.querySelector("#numbersinput").value;
    console.log(num)
    for (let i = 0; i < num.length; i++)
    {
        let n = num[i];
        if (n == key)
        {
            answer++;
            console.log(answer)
        }
    }
    document.querySelector("#results6").innerHTML = "The number " + key +
     " appears " + answer + " times.";

}

function GetStars(){
    //clear the results
    document.querySelector("#results7").innerHTML = "";
    let numStars = document.querySelector("#starsinput").value;
    let result = "";
    let outputStars = numStars;

    if(outputStars < 1)
    {
        alert("ERROR: value entered must be greater than 0" )
    }
    for(let i = 0; i < numStars; i++)
    {
        result += "*"; 
    }
    let output = result;
    document.querySelector("#results7").innerHTML = result;
}

function GetStarsRun(){
    //clear the results
    document.querySelector("#results8").innerHTML="";
    let numstars = +document.querySelector("#starslineinput").value;
    let lines = +document.querySelector("#lineinput").value;
    let stars1 = numstars;
    let stars2 = lines;

    if(stars1 < 1 || stars2 < 1)
    {
        alert("ERROR: value(s) entered must be greater than zero")
    }
    else if(stars2 > stars1)
    {
        alert("ERROR: The number of lines cannot be greater than the number of stars");
    }
    else{
        for(let i = 0; i <= numstars -1; i++)
        {
        if(i % lines === 0){
            document.querySelector("#results8").innerHTML += "<br>" + "*";
        }
        else{
            document.querySelector("#results8").innerHTML += "*";
        }
    }
        
    }   
   
}

function GetShipPay(){
    let inputShip = document.querySelector("#shipinput").value;
    console.log(inputShip);
    //clear the results
    document.querySelector("#results9").innerHTML ="";
    if(inputShip < 1){
        window.alert("You must enter a number greater than 1!")
    }
    let underOne = 5;
    let overOne = 4;
    let overThousand = 3;
    let baseCost;
    if(inputShip <= 99){
    baseCost = inputShip * underOne;
    console.log(baseCost);
    }
    else if(inputShip >= 100 && inputShip <= 1000){
        baseCost = inputShip * overOne;
        console.log(baseCost);
    }
    else{
        baseCost = inputShip * overThousand;
        console.log(baseCost);
    }
    let tax = baseCost * .15;
    let totalPayment = baseCost + tax;
    //send output
    document.querySelector("#results9").innerHTML += "<p>" + "BaseCost: " + baseCost + "</p>" +
    "<p>" + "Tax: " + tax + "</p>" + "<p>" + "Total: $" + totalPayment + "</p>";
}


function GetTriangle(){
    //clear the results
    document.querySelector("#results3").innerHTML ="";
    //get the user input declared as variables
    let num1 = +document.querySelector("#angleone").value;
    let num2 = +document.querySelector("#angletwo").value;
    let num3 = +document.querySelector("#anglethree").value;
   //declare constant for 90 angle and empty string for result
    const angle = 90;
    let angleResult = "";
    //if statement to determine type and or throw error to user
    if(num1 + num2 + num3 === 180){
        if(num1 === angle || num2 === angle || num3 === angle)
        {
            angleResult += "";
            document.querySelector("#results3").innerHTML += "This is a Right angle triangle";
        }
        else if(num1 > angle || num2 > angle || num3 > angle)
        {
            angleResult += "";
            document.querySelector("#results3").innerHTML += "This is a Obtuse triangle";
        }
        else if(num1 < angle && num2 < angle && num3 < angle)
        {
            angleResult += "";
            document.querySelector("#results3").innerHTML += "This is a Acute triangle";
        }
    }
    
    else if (num1 <= 0 || num2 <= 0 || num3 <= 0) 
    {
        alert("Angles must be 1 or greater");
    }
    else if(num1 >= 180 || num2 >= 180 || num3 >= 180)
    {
        alert("Angles must be less than 180");
    }
    else
    {
        alert("Angles must add(+) for a sum(=) of 180");
    }
}