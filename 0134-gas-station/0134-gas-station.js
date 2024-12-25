/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

var canCompleteCircuit = function (gas, cost) {
    let total = current = 0;
    let result = 0;
    //원래 배열 + 원래 배열
    // guaranteed to be unique. 을 생각해야 할거같음
    // - 가 반드시 있다.(아님, + 1개있을수도 )
    // -> +도 반드시 있다. -에서 +로 넘어가는 순간이 중요?
    //[1,2,3,4,5] [1,2,3,4,5]
    //need = [-2,-2,-2,3,3,] -2,-2,-2,3,3 ]
    //need = [-2,3,-2,3,-2 ] -2,3,-2,3,-2 ]
    //need=[3,3,-2,-2,-2] 3,3,-2,-2,-2
    //need = [-1,-1,1] -1,-1,1
    //need = [0,0,0,0,0,-1,2,0,0,0,0,0,-1,2]
    //합계가 음수면 -1
    //need =[2,-1,-1,2,-1,-1]
 

    for (let i = 0; i < gas.length; i++) {
        const need = gas[i] - cost[i]
        total += need
        current += need
        if(current<0){
            current = 0
            result = i + 1
        }
    }

    if(total<0) return -1
    return result
};