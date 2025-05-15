function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};

    // Count the occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Collect characters that appear only once
    const nonRepeatingChars = [];
    for (let char of str) {
        if (charCount[char] === 1) {
            nonRepeatingChars.push(char);
        }
    }

    return nonRepeatingChars;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
