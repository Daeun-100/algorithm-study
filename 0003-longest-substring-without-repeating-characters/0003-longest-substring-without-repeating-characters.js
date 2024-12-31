/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let result = 0;
    let length = 0;
    let startIndex = 0;
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        console.log(s[i],length, result)
        if (!map.has(s[i])) {
            map.set(s[i], i)
            length += 1;
            result = Math.max(result, length)
            continue
        }
        if (i - map.get(s[i]) > result || i - map.get(s[i]) > length ) {
            length += 1;
            result = Math.max(result, length)
        }else{
            length = i - map.get(s[i]) 
        }
        map.set(s[i], i)
    }
    return result
};