function simpleCalculator(a, operator, b) {
    let result;
    switch (operator) {
        case '+':
            result = a + b;
            break
        case '-':
            result = a - b;
            break
        case '*':
            result = a * b;
            break
        case '/':
            if (b === 0)
                return "Cannot divide by zero.";
            else {
                result = a / b;
                break;
            }
        default:
            return "Invalid operator.";
    }
    return result;
}

console.log(simpleCalculator(5, '+', 3));
console.log(simpleCalculator(10, '-', 4));
console.log(simpleCalculator(3, '*', 7));
console.log(simpleCalculator(15, '/', 3));
console.log(simpleCalculator(10, '/', 0));
console.log(simpleCalculator(5, '&', 3));
