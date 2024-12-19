/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const resultArr = []
    const newStart = newInterval[0]
    const newEnd = newInterval[1]
    let i = 0
    let isNewIntervalContain = false
    let tempInterval = [Infinity,-Infinity];

    if(intervals.length===0){
        return [newInterval]
    }

    while(intervals[i]){
        const starti = intervals[i][0]
        const endi = intervals[i][1]
        
        //안겹치는 경우
        //1.현재 구간이 newInterval보다 이전에 끝나는 경우
     
        if(endi < newStart){
            resultArr.push(intervals[i]);
            i+=1;
            continue;
        }

        //2.현재 구간이 newInterval보다 이후에 오는 경우
        if(newEnd < starti){
            if(isNewIntervalContain === false){
                if( tempInterval[0] === Infinity){
                    resultArr.push(newInterval);
                    
                }else{
                    resultArr.push(tempInterval)
                }
                isNewIntervalContain = true;
            }
            resultArr.push(intervals[i]);
            i+=1;
            continue;
        }

        //겹치는 경우
        let tempStart = Math.min(starti,newStart,tempInterval[0])
        let tempEnd = Math.max(endi,newEnd,tempInterval[1])
        tempInterval = [tempStart,tempEnd]
        i+=1;

    }

    if(isNewIntervalContain === false){
        if( tempInterval[0] === Infinity){
            resultArr.push(newInterval);
                    
        }else{
            resultArr.push(tempInterval)
        }
    }
    return resultArr
}

//intervals의 starti는 유지 or 아예 병합됨
// newInterval의 [start,end] 가 어디 속하는지 확인
// -> start가 intervals의 starti보다 크고 endi보다 작아야함
// -> end가 endi보다 크면 구간 병함 ( endi = end)
// -> endi 가 다음 starti보다 크거나 같으면 구간 병합
// 경우의 수가 너무 많다. 더 간단한 방법이 없을까?
// -> 경우의 수 3가지만 고려하면됨, 기준점 기준으로 

