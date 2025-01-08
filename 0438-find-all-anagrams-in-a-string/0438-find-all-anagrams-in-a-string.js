/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const pMap = new Map()
    const result = []

    for (let i = 0; i < p.length; i++) {
        if (pMap.has(p[i])) {
            pMap.set(p[i], pMap.get(p[i]) + 1)
        } else {
            pMap.set(p[i], 1)
        }
    }
    console.log(pMap)
    let prev;
    let next;
    for (let i = 0; i < s.length; i++) {
        console.log(i)
        if (prev && next && prev === next) {
            result.push(i)
            prev = s[i]
            next = s[i + p.length]
            continue;
        }
        let sMap = new Map()
        let isBreak = false
        for (let j = 0; j < p.length; j++) {
            if (!pMap.has(s[i + j])) {
                i = i + j
                isBreak = true
                break;
            }
            if (sMap.has(s[i + j])) {
                sMap.set(s[i + j], sMap.get(s[i + j]) + 1)
            } else {
                sMap.set(s[i + j], 1)
            }
            console.log(sMap)
        }
        if (isBreak) {
            prev = null
            next = null
            continue;
        }

        if (JSON.stringify([...sMap.entries()].sort((a, b) => a[0].localeCompare(b[0]))) === JSON.stringify([...pMap.entries()].sort((a, b) => a[0].localeCompare(b[0])))) {
          
            result.push(i)
            prev = s[i]
            next = s[i + p.length]
        }
    }
    return result

};
//각 index에서 p의 길이만큼 반복을 해서 각 문자가 1번씩 포함되는지 확인해야함
// p에 없는 문자면 그다음 index부터 다시 검사