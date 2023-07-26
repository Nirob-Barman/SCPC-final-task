function generateRandomPassword(length) {
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?/{}[]";

    const allChars = upperCaseChars + lowerCaseChars + numberChars + specialChars;
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    return password;
}

const passwordLength = 8;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);