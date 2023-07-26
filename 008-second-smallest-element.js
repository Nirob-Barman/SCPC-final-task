function findSecondSmallest(num) {
    if (num.length < 2) {
        return "Array must contain at least two elements.";
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < num.length; i++) {
        if (num[i] < smallest) {
            secondSmallest = smallest;
            smallest = num[i];
        } else if (num[i] < secondSmallest && num[i] !== smallest) {
            secondSmallest = num[i];
        }
    }

    if (secondSmallest === Infinity) {
        return "No second smallest element found in the array.";
    }

    return secondSmallest;
}

const numbersArray = [5, 2, 8, 1, 9, 3];
// const numbersArray = [5, 5, 5, 5];
// const numbersArray = [5];
// const numbersArray = [5, 3, 4];
console.log(findSecondSmallest(numbersArray));