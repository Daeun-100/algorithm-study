/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1
    let boundary;
    let isRotate = false;

    if (nums[left] > nums[right]) {
        isRotate = true
    }

    if (isRotate) {
        //큰->작은 숫자 로 변하는 부분 찾기
        while (left < right) {
            let current = Math.floor((left + right) / 2)
            let currentNum = nums[current]
            if (currentNum > nums[current + 1]) {
                boundary = current
                break
            }
            if (nums[left] > currentNum) {
                right = current
            } else if (nums[left] < currentNum) {
                left = current
            }
        }
        left = 0;
        right = nums.length - 1
        if (nums[left] <= target && target <= nums[boundary]) {
            right = boundary
        } else if (nums[boundary + 1] <= target && target <= nums[right]) {
            left = boundary + 1
        }

    }



    while (left <= right) {
        let current = Math.floor((left + right) / 2)
        if (nums[current] === target) return current
        if (nums[current] < target) {
            left = current + 1
        } else {
            right = current - 1
        }
    }

    return -1
};

// target이 nums[0] 보다 작은경우-> 가장 큰것보다 뒤에있음
// target이 nums[0] 보다 큰 경우 -> 가장 큰것보다 앞에있음

// 회전된경우 : nums[right]가 nums[left]보다 작음
// 1. nums[current] 랑 nums[left] 