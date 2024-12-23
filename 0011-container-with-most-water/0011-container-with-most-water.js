/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1
    while (left < right) {
        let curHeight = Math.min(height[left], height[right])
        maxArea = Math.max(maxArea, curHeight * (right - left))
        if (height[left] <= height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return maxArea
};

// 가로길이 * 세로길이
// 세로길이 : min (heights)
// 가로길이 : index 차이 
// 2중 순회로 했더니 시간초과
// 내 기준으로 양쪽을 다 확인해야함 -> 순서대로 하면 안해도되나?
// 양쪽에서 부터 시작해 높은 길이를 남기면 나중에 최대값 알수잇음 ->