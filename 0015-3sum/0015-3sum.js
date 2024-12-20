/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function (nums) {
    const resultArr = []
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        //중복제거
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = nums.length - 1;
        //j가 k보다 커지는거 방지
        while (j < k) {
            let total = nums[i] + nums[j] + nums[k]

            if (total > 0) {
                k--;
            } else if (total < 0) {
                j++;
            } else {
               
                resultArr.push([nums[i], nums[j], nums[k]])
                j++

                //중복방지
                while (nums[j] === nums[j - 1] && j < k) {
                    j++;
                }
            }
        }
    }
    return resultArr

};

//배열을 정렬 -> 0개수로 기준나누기와 비슷한 역할
// [000], [음수,0,양수], [음수, 양/음수, 양수] 
//포인터 이용 i,j,k -> 최소,최대값 포함, j는 최소 +1
//만약 다 더했는데 양수 -> 양수값을 줄여야함 -> k 포인터 이동
// 만약 다 더했는데 음수 -> 음수값을 줄여야함 -> j포인터 이동 -> j>k가 되면 i를 증가