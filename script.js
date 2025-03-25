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
// Example: maxSubarraySum([2, 3, -1, 4, -2, 6], 3) => 8`,

    solution3: `function isPalindrome(str) {
    const stack = [];
    for (let char of str) {
        stack.push(char);
    }
    for (let char of str) {
        if (char !== stack.pop()) {
            return false;
        }
    }
    return true;
}
// Example: isPalindrome("racecar") => true`,

    solution4: `function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
// Example: binarySearch([1, 3, 5, 7, 9], 5) => 2`,

    solution5: `function countFrequency(arr) {
    const frequency = {};
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    return frequency;
}
// Example: countFrequency([1, 2, 2, 3, 3, 3, 4]) => {1:1, 2:2, 3:3, 4:1}`,

    solution6: `function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
// Usage example:
const sayHello = () => console.log("Hello!");
const debouncedHello = debounce(sayHello, 1000);
debouncedHello(); // Will only log "Hello!" after 1 second without repeated calls`,

    solution7: `function findMiddle(head) {
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
// Example:
// Linked list: 1 -> 2 -> 3 -> 4 -> 5
// Output: Node with value 3`
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
