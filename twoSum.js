// LeetCode #1
// Brute force solution

let twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i])
                // console.log(i, j);
                return i, j; 
        }
    }
};

twoSum([2,7,11,15],9);