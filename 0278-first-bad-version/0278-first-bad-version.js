/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let begin = 1;
        let end = n 
        while (begin <= end) {
            let current = Math.floor((begin + end) / 2) 
            if (!isBadVersion(current)) {
                begin = current + 1
            } else {
                //true인 경우 젤 낮은 true값 찾아야함
                if (current===1 || !isBadVersion(current-1)  ) return current
                end = current - 1
            }
        }


    };
};