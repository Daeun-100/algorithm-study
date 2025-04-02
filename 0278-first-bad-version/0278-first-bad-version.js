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
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
          let left = 1;
        let right = n;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (isBadVersion(mid)) {
                right = mid;  // badVersion일 경우 왼쪽으로 이동
            } else {
                left = mid + 1;  // 정상일 경우 오른쪽으로 이동
            }
        }

        return left;  // left == right가 될 때가 첫 bad version
        
    };
};