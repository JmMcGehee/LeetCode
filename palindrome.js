// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.


// /**
//  * @param {number} x
//  * @return {boolean}
//  */

// Convert the number to a string
// Iterate through the integer forwards and compare values from the back. 
// Return true if no "errors" are discovered

let isPalindrome = function(x) {
    let number = x.toString();
    let palindrome = Boolean; 
    for (let i = 0; i < number.length; i++) {
        if (number.charAt(i) != number.charAt((number.length -1) - i)) {
            palindrome = false; 
            return;
        } else {
            palindrome = number.charAt(i) == number.charAt((number.length -1) - i);
        }
        console.log(palindrome);
    }
    return palindrome;
};

isPalindrome(1000021);

// Only checking the first character.... :/