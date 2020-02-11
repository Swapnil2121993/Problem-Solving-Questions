// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSums(nums, target) {
    const comp = {};
    for (let i = 0; i < nums.length; i++) {
        if (comp[nums[i]] >= 0) {
            console.log('---', comp[nums[i]])
            return [comp[nums[i]], i]
        }
        console.log('else', comp[target - nums[i]] = i)
        comp[target - nums[i]] = i
    }
    return comp
};

console.log(twoSums([3, 2, 3], 6))