// Task 11 - Compulsory task 2

/* I really struggled with the 2nd part of this task, i.e. getting the value of the key-value pair to display in 
an alert. The following website eventually helped me make sense of it:
 https://www.tabnine.com/academy/javascript/how-to-use-option-selected-property/ */

// Assign keys and values to the map. Fictitious names of students and their average mark for tests
let avgGradesMap = new Map();
avgGradesMap.set("Evan", 75);
avgGradesMap.set("Lucy", 46);
avgGradesMap.set("John", 65);
avgGradesMap.set("James", 67);
avgGradesMap.set("Debrah", 89);

// Function to create dropdown list of names of the students in the "avgGradesMap" map. Is called when page loads
function createDropdown() {

    let chooseParent = document.getElementById("gradesDropdown");
    // select parent element to add "option" elements to and assign this reference to a variable

    // for of loop to write each key in map to the dropdown list
    for (let key of avgGradesMap.keys()) {
        let createOptionItem = document.createElement("option");
        createOptionItem.innerHTML = key; // Writes key from map as content for each dropdown list item 
        createOptionItem.value = key; // Assign a value to each "option" element in dropdown (i.e. the key from map)

        chooseParent.appendChild(createOptionItem); // Add/append new "option" element to parent "select" element
    }
}

/* Function to create an alert box to display the grade of the student when the user chooses that student's name
from the dropdown list */
function displayGrade() {
    let gradeToDisplay = avgGradesMap.get(document.getElementById('gradesDropdown').value); // Get value from map
    alert(gradeToDisplay + "%"); // Write value to alert box
}