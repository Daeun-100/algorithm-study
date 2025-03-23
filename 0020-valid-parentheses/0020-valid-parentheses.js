/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    const pair = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            //여는 괄호
            stack.push(char); 
        } else {
            // 닫는 괄호
            if (stack.pop() !== pair[char]) {
                return false; // 짝이 맞지 않으면 유효하지 않음
            }
        }
    }

    return stack.length === 0; // 스택이 비어 있어야 유효함

};