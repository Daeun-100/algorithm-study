/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    for(let i = 0 ; i < nums.length ; i ++){
        map.set(nums[i],i);
    }

    for(let i = 0 ; i < nums.length ; i ++){
        const curNumber = nums[i];
        const complement = target - curNumber;
        if(map.has(complement) && map.get(complement) !== i ){
            return [i,map.get(complement)];
        }
    }
};

// 이중 반복은 시간복잡도 O(n)
// 시간복잡도를 줄일 수 있는 방법은 없을까? -> 반복문을 하나 줄여야함 -> 숫자와 index를 저장하는 다른 저장소 필요 -> Map
// 공간복잡도/ 이중 반복은 시간복잡도 O(n)
// 시간복잡도를 줄일 수 있는 방법은 없을까? -> 반복문을 하나 줄여야함 -> 숫자와 index를 저장하는 다른 저장소 필요 -> Map
// 공간복잡도는 O(n) 으로 늘어남