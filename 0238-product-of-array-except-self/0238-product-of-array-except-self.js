/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //곱셈의 결과만 알면 되니까 각자 배열 따로 안만들어도됨!
    let n = nums.length
    let productArr = new Array(n).fill(1);

    //곱셈을 원해 -> 근데 특정자리는 곱셈을 원하지 않아 -> 곱하기 1 로 만듬
    let prefix=1
    for(let i = 0 ; i < n; i++){
        productArr[i] = prefix
        prefix *= nums[i]
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        productArr[i] *= suffix;
        suffix *= nums[i];
    }

    return productArr

};

//문제에 접미,접두가 왜 나왔을까?
//나누기를 이용하면 안됨 -> 다 곱하고 현재 num 나누는 방법 안됨
//O(n) -> 반복문 1개만