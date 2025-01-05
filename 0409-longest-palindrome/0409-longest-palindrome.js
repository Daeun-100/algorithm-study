/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    let isOdd = false
    let sum = 0
    for (const value of map.values()) {

        if (value % 2 === 1) {
            if (isOdd === false) {
                isOdd = true;
            }
            sum += value - 1
        } else if (value % 2 === 0) {
            sum += value
        }
    }

    return isOdd ? sum + 1 : sum

};