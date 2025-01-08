/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

    const output = [];
    const neededChars = {};

    for (let char of p) {
        if (char in neededChars) {
            neededChars[char]++;
        } else neededChars[char] = 1;
    }

    let left = 0;
    let right = 0;
    let count = p.length;
    
    while (right < s.length) {
        // `s[right]` 문자가 `neededChars`에 있고, 현재 필요한 경우 `count`를 감소시킵니다.
        if (neededChars[s[right]] > 0) count--;

        // 현재 문자의 필요 개수를 감소시키고 오른쪽 포인터를 한 칸 이동합니다.
        neededChars[s[right]]--;
        right++;

        // `count`가 0이 되면, 이는 현재 윈도우에서 애너그램을 찾았다는 의미이므로 `left`를 결과 배열에 추가합니다.
        if (count === 0) output.push(left);

        // 윈도우의 길이가 `p`의 길이에 도달하면 윈도우를 한 칸 이동시키기 위해 왼쪽 포인터를 증가시킵니다.
        if (right - left == p.length) {
            // 왼쪽에서 제외되는 문자가 필요한 문자라면, `count`를 증가시킵니다.
            if (neededChars[s[left]] >= 0) count++;

            // 윈도우에서 제외된 문자를 다시 필요 목록(`neededChars`)에 추가하여, 이후에 다시 사용할 수 있도록 복원합니다.
            neededChars[s[left]]++;
            left++;
        }
    }
    // 모든 애너그램의 시작 인덱스를 반환합니다.
    return output;
};