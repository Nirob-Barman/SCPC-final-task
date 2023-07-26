function sumOfPosIntegers(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 0)
            sum += num[i];
    }
    return sum;
}

inputArray = [2, -5, 10, -3, 7];
console.log(sumOfPosIntegers(inputArray));