// Solutions for the questions
const solutions = {
    solution1: `function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
// Example: reverseArray([1, 2, 3, 4, 5]) => [5, 4, 3, 2, 1]`,

    solution2: `function maxSubarraySum(arr, k) {
    let maxSum = 0, currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }
    maxSum = currentSum;
    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
    };

function showSolution(id) {
    const solutionElement = document.getElementById(id);
    if (solutionElement.style.display === "none" || !solutionElement.style.display) {
        solutionElement.textContent = solutions[id];
        solutionElement.style.display = "block";
    } else {
        solutionElement.style.display = "none";
    }
}