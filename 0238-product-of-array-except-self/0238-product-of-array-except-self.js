/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const reverseArr=[...nums].reverse()
    const productArr=[]
    const prefixArr=[]
    const suffixArr=[]

    nums.forEach((num,index)=>{
        if(index === 0) return prefixArr.push(num) 
        prefixArr.push(prefixArr[index-1] * nums[index])
    })

    reverseArr.forEach((num,index)=>{
        if(index === 0) return suffixArr.push(num)
        suffixArr.push(suffixArr[index-1] * reverseArr[index])
    })
    suffixArr.reverse()
    
    for(let i = 0  ; i < nums.length ; i++){
        if(i === 0) {
            productArr.push(suffixArr[i+1])
            continue;
        }

        if(i === nums.length-1){
            productArr.push(prefixArr[i-1])
            continue;
        }

        productArr.push(prefixArr[i-1] * suffixArr[i+1])
    }
    return productArr
};

//문제에 접미,접두가 왜 나왔을까?
//나누기를 이용하면 안됨 -> 다 곱하고 현재 num 나누는 방법 안됨
//O(n) -> 반복문 1개만