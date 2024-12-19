/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice =prices[0];
    let maxProfit = 0 ;
    
    for(let i = 1 ;i<prices.length; i++){
        if(prices[i]< buyPrice){
            buyPrice = prices[i]
        }
        maxProfit = Math.max(maxProfit,prices[i] - buyPrice)
    }

    return maxProfit
};


// 사는날 < 파는날 (사는날이 무조건 앞에 있어야함)
// prices[사는날] < prices[파는날] 이여야 이득이 생김
// 최고 이득을 내는 날을 찾아야함

// ## 구현 시도
// arr의 최대,최소값 구해서 뺀값 -> 가능한 이윤의 최대값/ 최고 이득을 내는 날을 찾아야함
// 젤 간단하게 구현 : 이중반복 돌면서 최대 이윤 저장 -> 시간초과
// 해시테이블(Map)에 저장해서 가능한 이윤의 최대값이 가능한지(큰 값의 index가 더 높은지) 확인 -> 흠...
// 아니면 거꾸로 확인? 나중값이 더 커야하니까
// 거꾸로 확인하면서 앞에 있는 값이 더 크면 break -> 긴 테스트arr 시간초과 -> break조건을 >=로 변화

//이중 순회를 돌 필요없음 -> 이윤 최대값만 저장하면 됨