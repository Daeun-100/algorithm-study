/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort(([start1, end1], [start2, end3]) => start1 - start2)

    const resultArr = []
    let currentInterval = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
        if (currentInterval[1] < intervals[i][0]) {
            resultArr.push(currentInterval)
            currentInterval = intervals[i]
        } else {
            currentInterval[1] = Math.max(currentInterval[1], intervals[i][1])
        }
    }
    resultArr.push(currentInterval)
    return resultArr
};

//배열의 마지막요소에 접근 반복하는게 성능을 저하시킴
//while 보다는 for문?