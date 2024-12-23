/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


var sortColors = function (nums) {
    let red = 0;
    let white = 0;
    let blue = nums.length - 1;

    while (white <= blue) {
        if (nums[white] === 0) {
            [nums[white], nums[red]] = [nums[red], nums[white]];
            red += 1;
            white += 1;
        } else if (nums[white] === 1) {
            white++;
        } else {
            [nums[white], nums[blue]] = [nums[blue], nums[white]];
            blue--;
        }
    }


};

//sort 함수 사용불가!
// 0 , 1 ,2가 서로 인접하게 그러면서 순서대로 
// in-place : 제자리 정렬!