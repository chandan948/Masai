// Variable Declarations
let variable1 = 502;
const constant1 = 34;

// Function Creation
function addNumbers(a, b) {
    return a + b;
}

const multiplyNumbers = (a, b) => a * b;

// Template Literals
const resultString = `
The sum of ${variable1} and ${constant1} is: ${addNumbers(variable1, constant1)}
The product of ${variable1} and ${constant1} is: ${multiplyNumbers(variable1, constant1)}
`;

console.log(resultString);
