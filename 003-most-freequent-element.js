function findMostFrequentElement(num) {
    let mostFrqNumber;
    let maxFrq = 0;

    for (let i = 0; i < num.length; i++) {
        let currentNumFrq = 0;
        for (let j = 0; j < num.length; j++) {
            if (num[i] == num[j])
                currentNumFrq++;
        }
        if (currentNumFrq > maxFrq) {
            maxFrq = currentNumFrq;
            mostFrqNumber = num[i];
        }
    }
    return mostFrqNumber
}

let inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(findMostFrequentElement(inputArray));