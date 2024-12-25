/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const seen = {} // 중복이 되는 map

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.hasOwnProperty(complement)) {
            return [seen[complement], i]
        }
        seen[nums[i]] = i
    }

};