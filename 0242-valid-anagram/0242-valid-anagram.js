/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const sMap = new Map()
    for (let i = 0; i < s.length; i++) {
        if (sMap.has(s[i])) {
            sMap.set(s[i], sMap.get(s[i]) + 1)
            continue
        }
        sMap.set(s[i], 1)
    }

    for (let i = 0; i < t.length; i++) {
        if (sMap.has(t[i])) {

            sMap.set(t[i], sMap.get(t[i]) - 1)
            if (sMap.get(t[i]) < 0) {
                console.log(sMap)
                return false
            }
            continue
        }
        return false
    }
    return true
};