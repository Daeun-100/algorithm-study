/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    if (nums.length === 1) return 0

    nums = nums.map((num) => {
        if (num === 0) return -1
        return num
    })
    const add = []
    add.push(nums[0])
    for (let i = 1; i < nums.length; i++) {
        add.push(nums[i] + add[i - 1])
    }
    let map = new Map()
    let max = 0;
    for (let i = 0; i < add.length; i++) {
        if(add[i] === 0){
            max = i+1
        }else if(map.has(add[i])){
            max = Math.max(max,i - map.get(add[i]))
        }else{
            map.set(add[i],i)
        }

    }

    return max

};