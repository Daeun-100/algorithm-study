/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const newArr = []
    k = k % nums.length
    if (k === 0) return

    // nums.length - k 개까지 저장해야함
    for (let i = 0; i < nums.length - k; i++) {
        newArr.push(nums[i])
        

    }
    let index = 0
    for (let i = nums.length - k; i < nums.length; i++) {
        nums[index] = nums[i]
        index += 1;
    }
   for (let i = 0; i < nums.length - k; i++) {
        nums[index] = newArr[i]
        index+=1;
    }
};