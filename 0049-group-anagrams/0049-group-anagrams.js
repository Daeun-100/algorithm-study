/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    const rearragedStrs = strs.map((string) => { return [...string].sort().join("") })
 
    const stringIndex = {}
    for (let i = 0; i < strs.length; i++) {
        if (stringIndex[rearragedStrs[i]]) {
            stringIndex[rearragedStrs[i]].push(strs[i])
        } else {
            stringIndex[rearragedStrs[i]] = [strs[i]]
        }
    }
    console.log(stringIndex)
    const result = []
    for (const key in stringIndex) {
        result.push(stringIndex[key])
    }
    
   return result
};