/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort(([start1,end1],[start2,end3])=> start1-start2)

    const resultArr=[]

    let i = 1
    resultArr.push(intervals[0])
    while(i<intervals.length){
        if(resultArr[resultArr.length-1][1] < intervals[i][0]){
            resultArr.push(intervals[i])
        }else{ 
            Math.max(resultArr[resultArr.length-1][1],intervals[i][1])
            resultArr[resultArr.length-1][1] = Math.max(resultArr[resultArr.length-1][1],intervals[i][1])
        }
        i+=1;
    }

    return resultArr
};