// Given an integer array nums, find the contiguous subarray 
//(containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

//Follow up:
//If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

function maxSubarray(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let currentSum = 0;

    let maxSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];

        currentSum = Math.max((currentNum + currentSum), 0)

        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum

}

console.log(maxSubarray([-2, -1]))