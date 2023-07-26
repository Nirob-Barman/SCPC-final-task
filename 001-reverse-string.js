function reverseString(str) {
    revString = "";
    for (let i = str.length - 1; i >= 0; i--)
        revString += str[i];
    return revString;
}

inputString = "hello world";
console.log(reverseString(inputString));