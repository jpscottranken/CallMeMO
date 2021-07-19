"use strict";

function main() {
    //  Create and initialize program constants
    const MINMILESDRIVEN =    1;    //  Minimum allowable miles driven
    const MAXMILESDRIVEN = 1000;    //  Maximum allowable miles driven
    const MINGALLONSUSED =    1;    //  Minimum allowable gallons used
    const MAXGALLONSUSED =  100;    //  Maximum allowable gallons used

    //  Create and initialize program variables
    let milesDriven = 0.0;
    let gallonsUsed = 0.0;
    let mpg         = 0.0;

    //  Input miles driven
    milesDriven  = parseFloat(prompt("Enter Miles Driven (1 - 1000)", "250"));
    //  Miles Driven Validation Checks
    while ((isNaN(milesDriven))           ||
           (milesDriven < MINMILESDRIVEN) || 
           (milesDriven > MAXMILESDRIVEN)) {
       alert("Non-numeric Value Or Out-Of Range Input Entered For Miles Driven");
       milesDriven  = parseFloat(prompt("Enter Miles Driven (1 - 1000)", "250"));
   }
    
    //  If we get to this point, the input for milesDriven:
    //  a) Was numeric
    //  b) Was in range

    gallonsUsed  = parseFloat(prompt("Enter gallons used (1 - 100)", "10"));
    //  Gallons Used Validation Checks
    while ((isNaN(gallonsUsed))           ||
           (gallonsUsed < MINGALLONSUSED) || 
           (gallonsUsed > MAXGALLONSUSED)) {
       alert("Non-numeric Value Or Out-Of Range Input Entered For Gallons Used");
       gallonsUsed  = parseFloat(prompt("Enter Miles Driven (1 - 100)", "10"));
    }

    //  If we get to this point, the input for both milesDriven and gallonsUsed:
    //  a) Was numeric
    //  b) Was in range (1 - 1000 for milesDriven and 1 - 100 for gallons used)

    //  So, calculate and display miles per gallon (MPG);
    mpg = milesDriven / gallonsUsed;

    //  Display both inputs and the calculated output
    let str  = `The Input For Miles Driven Was ${milesDriven.toFixed(2)}\n`;
        str += `The Input For Gallons Used Was ${gallonsUsed.toFixed(2)}\n`;
        str += `The Calculated Miles Per Gallon Was ${mpg.toFixed(2)}\n`;
    
    alert(str);
}