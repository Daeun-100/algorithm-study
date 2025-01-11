/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length
    let index = Math.floor(nums.length / 2)
    const set = new Set()
    do {
       
        if (nums[index] === target) return index
        if (nums[index] < target) {
            set.add(nums[index])
            left = index
            index = Math.floor((left + right) / 2)
        } else if (nums[index] > target) {
            set.add(nums[index])
            right = index
            index = Math.floor((left + right) / 2)
        }
    } while (!set.has(nums[index]))

    return -1
};