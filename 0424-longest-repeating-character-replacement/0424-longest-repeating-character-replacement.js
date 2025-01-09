/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let left = 0;
    let freqs = {}
    let maxFreq = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        if (freqs[s[right]]) {
            freqs[s[right]] += 1
        } else {
            freqs[s[right]] = 1
        }
        maxFreq = Math.max(maxFreq, freqs[s[right]]);

        while ((right - left + 1) - maxFreq > k) {
            freqs[s[left]] -= 1;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;

};