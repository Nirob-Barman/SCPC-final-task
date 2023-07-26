function romanToInteger(romanNumeral) {
    const romanValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    let integerValue = 0;
    for (let i = 0; i < romanNumeral.length; i++) {
        const currentValue = romanValues[romanNumeral[i]];
        if (romanValues[romanNumeral[i + 1]] > currentValue) {
            integerValue -= currentValue;
        } else {
            integerValue += currentValue;
        }
    }

    return integerValue;
}

console.log(romanToInteger("IX"));
console.log(romanToInteger("XXI"));
console.log(romanToInteger("XLII"));
