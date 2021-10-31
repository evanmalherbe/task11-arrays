// Task 11 - Compulsory task 1
// Declare variables --------------------------------------- //

let favLanguages = ["Javascript", "PHP", "HTML", "CSS", "SQL", "Python"]; // array
let i;

// -------------------------------------------------------------- //

/* Function to write contents of "favLanguages" array to an unordered list on the page. Is written when page loads. */
function loadContent() {
    // For loop to add items in array to list
    for (i = 0; i < favLanguages.length; i++) {
        let selectUl = document.getElementById("favLanguages");
        // select parent element "ul" and add reference to variable
        let createListItem = document.createElement('li'); // Create "li" element and assign to variable

        createListItem.innerHTML = favLanguages[i]; // Insert list item from array
        selectUl.appendChild(createListItem); // Append/add list item to "ul" element
    }
}

/* This function is called when the page loads. It creates an array of fictitious test results, finds the average 
of all the results and then assigns a symbol to the average (a, b, c). It then writes this info to the page. */
function testAverage() {
    // Declare variables ---------------------------------- // 
    let myJSTestResults = [95, 73, 45, 67, 83];
    let sum = 0;
    let arrayLength = myJSTestResults.length;

    // -------------------------------------------------------//

    // For loop to add each mark in the array together for a total.
    for (i = 0; i <= arrayLength - 1; i++) {
        sum += myJSTestResults[i]; // store result in variable "sum"
    }

    let averageMark = sum / arrayLength; // Calculate average mark of all marks and assign it to a variable
    let selectDiv = document.getElementById('myGrades'); // Select parent element and assign reference to a variable

    // If statement to assign a symbol (a, b, c) to the average mark and print it to the screen in a div
    if (averageMark >= 80 || averageMark <= 100) {
        selectDiv.innerHTML = `The average mark is ${averageMark}%, which is an A.`;
    } else if (averageMark >= 70 || averageMark <= 79) {
        selectDiv.innerHTML = `The average mark is ${averageMark}%, which is a B.`;
    } else if (averageMark >= 60 || averageMark <= 69) {
        selectDiv.innerHTML = `The average mark is ${averageMark}%, which is a C.`;
    } else if (averageMark >= 50 || averageMark <= 59) {
        selectDiv.innerHTML = `The average mark is ${averageMark}%, which is a D.`;
    } else if (averageMark <= 49) {
        selectDiv.innerHTML = `The average mark is ${averageMark}%, which is an F.`;
    } else {
        selectDiv.innerHTML = "That's a strange average mark. There must be a mistake.";
        // In case an incorrect array of marks is entered or average is more or less than expected range 0 - 100
    }

}