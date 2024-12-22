/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const resultArr = []
    let currentInterval = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        if (currentInterval[1] >= intervals[i][0]) {
            currentInterval[1] = Math.max(currentInterval[1], intervals[i][1])
        } else {
            resultArr.push(currentInterval)
            currentInterval = intervals[i]
        }
    }
    resultArr.push(currentInterval)
    return resultArr
};

//배열의 마지막요소에 접근 반복하는게 성능을 저하시킴
//while 보다는 for문?