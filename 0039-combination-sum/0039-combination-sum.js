/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a-b)
    const resultArr = []

    const backTracking=(idx,comb,total)=>{
        if(total === target){
            resultArr.push([...comb])
            return
        }

        if(total > target || idx >=candidates.length){
            return;
        }

        comb.push(candidates[idx])
        backTracking(idx,comb,total +candidates[idx] )
        comb.pop()
          backTracking(idx + 1,comb,total )
    }

    backTracking(0,[],0)
    return resultArr


}

//  unique conbination && 숫자 중복 사용 에 주목 모든 가능항 경우의 수를 backtracking으로 구함
// 재귀 사용?
// 조합 기억해야함 -> comb , base조건 확인해야함 -> total , index 증가시켜야함 -> index