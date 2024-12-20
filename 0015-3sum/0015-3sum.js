/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function areSetsEqual(set1, set2) {
    if (set1.size !== set2.size) return false;
    for (let item of set1) {
        if (!set2.has(item)) return false;
    }
    return true;
}

var threeSum = function(nums) {
    const positiveNums= new Map()
    const positiveSet = new Set()
    const negativeNums= new Map()
    const negativeSet = new Set()
    const zero=[]
    const resultArr=[]

    nums.forEach((num)=>{
        if(num === 0) return zero.push(num)
        if(num > 0) { 
            if(positiveNums.has(num)){
                 positiveNums.set(num,2) 
            }else{
                positiveNums.set(num,1)
                positiveSet.add(num)
            }
            return
        }
        if(num < 0){ 
            if(negativeNums.has(num)){
                 negativeNums.set(num,2) 
            }else{
                negativeNums.set(num,1)
                negativeSet.add(num)
            }
            return
        } 
    })
    console.log(negativeNums,zero,positiveNums)
    //0이 3개 이상 있는 경우
    if(zero.length>=3) resultArr.push([0,0,0])

    //0이 1개 이상 있는 경우 -> 양수 + 음수 해서 0만들어야함 -> 양수배열,음수배열에서 절대값같은 숫자 찾음
    if(zero.length >=1){
        //중복 확인
        let tempArr=[]
        positiveNums.forEach((value,num)=>{
            if(negativeNums.has(-num) && !tempArr.includes(num)){
                resultArr.push([-num,0,num])
                tempArr.push(num)
            }
        })
    }

    //0이 없을때 -> 양수 + 음수 + 양/음수 해서 0을 만들어야함
    let tempPositiveArr=[] //
    
    //⚠️ map에서 forEach돌때 key값을 나중에 받음
    for(const positiveNum of positiveSet){
        let tempNegativeArr=[]
        for(const negativeNum of negativeSet){
            let complement = - (positiveNum + negativeNum)
            if(complement === 0 )  continue;
            if(tempPositiveArr.includes(complement) || tempNegativeArr.includes(complement)) continue;
            if(complement < 0) {
              
                 //아...부호주의
                if(negativeSet.has(complement)){
               
                    if(negativeNum === complement && negativeNums.get(complement) === 1 ){
                        continue;
                    }

                    resultArr.push([negativeNum,complement,positiveNum])
                    tempNegativeArr.push(negativeNum,complement)
                    continue;
                }
            }
            if(complement > 0){
               
                if(positiveSet.has(complement)){
                 
                    if(positiveNum === complement && positiveNums.get(complement) ===1 ){
                        continue;
                    }

                    resultArr.push([negativeNum,complement,positiveNum])
                    tempNegativeArr.push(negativeNum)
                    continue;
                }
            }
        } 
        tempPositiveArr.push(positiveNum)
        
    }

    return resultArr

};

// 주어진 배열에서 합이 0이되는 3개의 숫자를 반환
// 같은 index의 숫자를 중복해서 사용 불가
// 3개의 숫자를 골라야한다고? numsC3 개의 경우의 수가 있음
// 먼저 2개의 숫자를 골라서 더함 -> 나머지 중에 합이 0이 되는 숫자가 있는지 확인
// index도 확인해야되니까 -> hash table이용?(Map) -> 중복된 숫자는 처리못함
// 0이 될라면  0.0,0 이 아닌이상 무조건 양수와 음수 둘다 있어야함 -> 양수와 음수를 나눠서 저장?

// 기준 나누기
// 1) 0 이 3개있는경우
// 2) 0 이 2개 있는경우 -> 불가능 -> 0으느 홀수개/아예없음 만 가능
// 3) 0 이 1개 있는 경우
// 4) 0 이 없는 경우

//시간초과! 루프를 너무 많이 돔