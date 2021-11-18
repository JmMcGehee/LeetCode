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
   number = x.toString();
//    console.log(number); 
//    console.log(number.length);
    for (let i = 0; i < number.length; i++) {
        console.log(number[i], i);
        console.log(number[(number.length - 1) - i], (number.length - 1) - i);
        if (number.charAt(i) !== number.charAt((number.length -1) - i)) {
            console.log(false);   
            return false
        } else {
            console.log(true);
            return true
        }
    }
};

isPalindrome(1000021);

// Only checking the first character.... :/