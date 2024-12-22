/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    for(let i =0;i<nums.length;i++){
        if(!map.has(nums[i])){
            if( 1 > nums.length/2) return nums[i]
            map.set(nums[i],1)
        }else{
            const currentCount = map.get(nums[i])
            if(currentCount+1 > nums.length/2) return nums[i]
            map.set(nums[i],currentCount+1)
        }
    }

};