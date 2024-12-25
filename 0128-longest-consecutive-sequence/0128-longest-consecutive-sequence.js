/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    nums.sort((a,b)=>a-b)
    let currentLength = 1;
    let longestLength = 1;
    let prevNum = nums[0]
    
    for(let i=1;i<nums.length;i++){
        if(prevNum === nums[i]){
            continue
        }
        else if(prevNum + 1 === nums[i]){
            prevNum = nums[i]
            currentLength +=1;
            
        }else{
            prevNum = nums[i]
            longestLength= Math.max(longestLength,currentLength)
            currentLength = 1
            
        }
    }
    longestLength= Math.max(longestLength,currentLength)
    return longestLength
};