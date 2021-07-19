"use strict";

//  Create and initialize program constants
const MINMILESDRIVEN =    1;    //  Minimum allowable miles driven
const MAXMILESDRIVEN = 1000;    //  Maximum allowable miles driven
const MINGALLONSUSED =    1;    //  Minimum allowable gallons used
const MAXGALLONSUSED =  100;    //  Maximum allowable gallons used
const INNE           = "Invalid. Non-Numeric Entry";
const OORE           = "Invalid. Out Of Range Entry"

let $ = function(id) {
    return document.getElementById(id);
}

//  Create and initialize program variables
let milesDriven = 0.0;
let gallonsUsed = 0.0;
let mpg         = 0.0;

let calculate = function() {
    milesDriven = parseFloat($("miles_driven").value);
    gallonsUsed = parseFloat($("gallons_used").value);
    let isValid = true;
 
    if (isValid) {        //  if (isValid === true)
        isValid = inputMilesDriven();
    }
    else {
        return;
    }

    if (isValid) {        //  if (isValid === true)
        isValid = inputGallonsUsed();
    }
    else {
        return;
    }

    if (isValid) {
        calculateMPG();
    }
}

function inputMilesDriven() {
    let retVal = true;

    //  Check for non-numeric input for milesDriven
    if (isNaN(milesDriven)) {
        $("milesDrivenError").firstChild.nodeValue = INNE;
        retVal = false;
    }
    //  Check for out-of-range input for milesDriven
    else if ((milesDriven < MINMILESDRIVEN) ||
             (milesDriven > MAXMILESDRIVEN)) {
        $("milesDrivenError").firstChild.nodeValue = OORE;
        retVal = false;
    }
    //  milesDriven input was valid (numeric and between 1 - 1000)
    else {
         $("milesDrivenError").firstChild.nodeValue = "";
         retVal = true;
    }

    return retVal;
}

function inputGallonsUsed() {
    let retVal = true;

    //  Check for non-numeric input for gallonsUsed
    if (isNaN(gallonsUsed)) {
        $("gallonsUsedError").firstChild.nodeValue = INNE;
        retVal = false;
    }
    //  Check for out-of-range input for gallonsUsed
    else if ((gallonsUsed < MINGALLONSUSED) ||
             (gallonsUsed > MAXGALLONSUSED)) {
        $("gallonsUsedError").firstChild.nodeValue = OORE;
        retVal = false;
    }
    //  gallonsUsed input was valid (numeric and between 1 - 100)
    else {
        $("gallonsUsedError").firstChild.nodeValue = "";
        retVal = true;
    }

    return retVal;
}

function calculateMPG() {
    mpg = milesDriven / gallonsUsed;
    $("miles_per_gallon").value = mpg.toFixed(2);
}

let resetAll = function() {
    $("miles_driven").value     = "";
    $("gallons_used").value     = "";
    $("miles_per_gallon").value = "";
    $("milesDrivenError").firstChild.nodeValue = "*";
    $("gallonsUsedError").firstChild.nodeValue = "*";
    $("miles_driven").focus();
    getResolution();
}

let showHelp = function() {
    let str  = "Enter a value into the miles driven field (1 - 1000)\n";
        str += "Enter a value into the gallons used field (1 -  100)\n";
        str += "Click the Calculate button to show the MPG\n";
        str += "Click the Reset button to set all fields to their defaults,\n";
        str += "and show the current screen size (w x l) and set the focus\n";
        str += "Click the Help button to show this alert";
    alert(str);
}

function getResolution() {
    alert(`Your current screen size: ${screen.width}  x ${screen.height}`);
}

window.onload = function() {
    $("miles_driven").focus();
    $("calculate").onclick = calculate;
    $("reset").onclick     = resetAll;
    $("help").onclick      = showHelp;
}