// Calling all the toggle button of type radio
const buttons = document.getElementsByClassName("button");

// Turning the toggle buttons to an array to enable looping
const arr = [...buttons];

// Calling the main Container
const container = document.querySelector('.main-container');


// Get the calculator display
const calculationDisplay = document.querySelector('h1');

// Getting all the numbers
const allNumbers = document.querySelectorAll('.number');

// Getting all the arithmetic operations
const operations = document.querySelectorAll('.operation');

// The display on screen as you type
// let calculation = '';
// To use local storage, we give it two things
// -- The name we want to use to access it as a string
// -- The thing we want to save inside the local storage


// Using local storage to save the current calculation
// The get item takes the name we gave the calculation in localStorage
let calculation = localStorage.getItem('calculation');

// This is to check if the LocalStorage is null i.e there is nothing in localStorage, if it is, we make it equal to the default value which is an empty string
if (calculation === null) {
    calculation = '';
};

// After Using local storage, allowing the previous calculation to show on page load
calculationDisplay.innerText = calculation;

// Getting the equal-to btn
const equalTo = document.querySelector('#equal-to');

// Show error
const error = "Type a number first";

// Get the reset button
const resetBtn = document.querySelector('#reset');

// Getting the delete button
const deleteButton = document.querySelector('#del-btn');

// Concatenating the numbers
allNumbers.forEach(number => {
    number.addEventListener('click', () => {
        calculation += number.innerText;
        calculationDisplay.innerText = calculation;
        localStorage.setItem('calculation', calculation);
    });
});

// Function to change colors
function changeColor(color1, color2, color3, color4) {
    document.querySelector('.calc').style.color = color1;
    document.querySelector('.theme').style.color = color2;
    document.querySelector('.buttons').style.backgroundColor = color3;
    document.querySelector('.calculation-display').style.backgroundColor = color4;
};

// Function to change colors
function changeColor2(color1, color2, color3, color4, color5, color6) {
    equalTo.style.backgroundColor = color1;
    deleteButton.style.backgroundColor = color2;
    resetBtn.style.backgroundColor = color3;
    container.style.backgroundColor = color4;
    calculationDisplay.style.color = color5;
    equalTo.style.color = color6;
};

// Concatenating the operation sign
operations.forEach(sign => {
    sign.addEventListener('click', () => {
        // Updated here to give space in the left and right of each operation symbol
        let calc = ` ${sign.innerText} `;
        calculation += calc;
        calculationDisplay.innerText = calculation;
        localStorage.setItem('calculation', calculation);
    });
});

// Making the equal to button work
equalTo.addEventListener('click', () => {
    if (calculation === '') {
        calculationDisplay.innerText = error;
    } else {
        let solved = eval(calculation);
        calculationDisplay.innerText = solved;
        calculation = solved;
    };
});

// Working on the reset btn
resetBtn.addEventListener('click', () => {
    calculation = '';
    calculationDisplay.innerText = '';
    localStorage.removeItem('calculation');
});

// Making the delete button work
deleteButton.addEventListener('click', () => {
    let updatedCalculation = calculation.slice(0, -1);
    calculation = updatedCalculation;
    calculationDisplay.innerText = calculation;
});


// Looping throught the array to display styles based on theme state
arr.forEach((element, index) => {
    element.addEventListener("click", () => {
        element.style.opacity = "1";
        if (index === 0) {
            document.getElementsByTagName("body")[0].style.backgroundColor = "";
            allNumbers.forEach(number => {
                number.style.backgroundColor = '';
                number.style.color = '';
            });
            operations.forEach(btn => {
                btn.style.color = '';
                btn.style.backgroundColor = '';
            });
            changeColor('', '', '', '');
            changeColor2('', '', '', '', '', '');
        } else if (index === 1) {
            document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(0, 0%, 90%)";
            allNumbers.forEach(number => {
                number.style.backgroundColor = 'hsl(45, 7%, 89%)';
                number.style.color = 'black';
            });
            operations.forEach(operand => {
                operand.style.backgroundColor = 'hsl(45, 7%, 89%)';
                operand.style.color = 'black';
            });
            changeColor('black', 'black', 'hsl(0, 0%, 93%)', 'white');
            changeColor2('hsl(25, 98%, 40%)', 'hsl(185, 58%, 25%)', 'hsl(185, 58%, 25%)', 'hsl(0, 5%, 81%)', 'black', '');
        } else {
            document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(268, 75%, 9%)";
            allNumbers.forEach(number => {
                number.style.backgroundColor = 'hsl(281, 89%, 26%)';
                number.style.color = 'hsl(52, 100%, 62%)';
            });
            operations.forEach(btn => {
                btn.style.color = 'hsl(52, 100%, 62%)';
                btn.style.backgroundColor = 'hsl(281, 89%, 26%)';
            });
            changeColor('hsl(52, 100%, 62%)', 'hsl(52, 100%, 62%)', 'hsl(268, 90%, 15%)', 'hsl(268, 90%, 15%)');
            changeColor2('hsl(176, 100%, 44%)', 'hsl(290, 70%, 36%)', 'hsl(290, 70%, 36%)', 'hsl(268, 71%, 12%)', 'hsl(52, 100%, 62%)', 'black');
        };

        arr
        .filter(function (item) {
            return item != element;
        })
        .forEach((item) => {
            item.style.opacity = "0";
        });
    });
});

