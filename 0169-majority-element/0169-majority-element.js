/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let num;
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(count===0) {
            num=nums[i]
            count=1;
        }else if(nums[i]===num){
            count+=1;
        }else{
            count-=1;
        }
    }
    return num

};

//1.map을 만들어서 진행
//2. 개수가 n/2인지만 알면됨 -> nums[0] 부터 검사
//아!  majority element 항상 있다고 했으므로 마지막에 남는건 무조건  majority element
// 처음부터 반복 안돌아도됨