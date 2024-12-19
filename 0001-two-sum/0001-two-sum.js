/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  
   
    for(let i = 0 ; i < nums.length ; i ++){
        for(let j =i+1 ; j < nums.length ; j ++){
            const sum = nums[i] + nums[j];
            if(sum === target){
                return [i,j];
            }
         
        }
    }
};

// 더해서 target이 되는 2개의 숫자를 찾기
// 숫자는 무조건 2개를 더해야함
// 1. 일일히 다 확인
// 배열 정렬
// index를 기록해야함
// - index 0 , 1  -> 0 , 2 -> ... -> 0 , nums.length -1
// if(더한거 > target) 돌아와서 index 1, 2 부터 시작
// if(더한거  === target ) return index
// 숫자의 index를 찾기