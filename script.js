// Solutions for the questions
const solutions = {
    solution1: `function charFrequency(str) {
    const freq = {};
    for (const char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}
// Example: charFrequency("hello") => { h: 1, e: 1, l: 2, o: 1 }`,

    solution2: `function reverseString(str) {
    if (str === "") {
        return "";
    }
    return reverseString(str.substr(1)) + str[0];
}
// Example: reverseString("hello") => "olleh"`,

    solution3: `function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
// Example: bubbleSort([5, 3, 8, 4, 2]) => [2, 3, 4, 5, 8]`,

    solution4: `function sortByStringLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
// Example: sortByStringLength(["apple", "bat", "carrot", "dog"]) => ["bat", "dog", "apple", "carrot"]`
};

// Function to show solutions
function showSolution(id) {
    const solutionElement = document.getElementById(id);
    if (solutionElement.style.display === "none" || !solutionElement.style.display) {
        solutionElement.textContent = solutions[id];
        solutionElement.style.display = "block";
    } else {
        solutionElement.style.display = "none";
    }
}
