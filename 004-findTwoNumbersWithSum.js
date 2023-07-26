function findTwoNumbersWithSum(num, targetValue) {
    let left = 0, right = num.length - 1;

    while (left < right) {
        let sum = num[left] + num[right];

        if (sum == targetValue)
            return [num[left], num[right]];
        else if (sum < targetValue)
            left++;
        else
            right--;

    }
    return [];
}

let inputArray = [1, 3, 6, 8, 11, 15];
let targetValue = 9;
console.log(findTwoNumbersWithSum(inputArray, targetValue));