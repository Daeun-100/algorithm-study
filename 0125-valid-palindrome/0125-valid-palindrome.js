/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr = []
    let pattern = /[a-zA-Z0-9]/
    for(let i=0;i<s.length;i++){
        if(pattern.test(s[i])){
            arr.push(s[i].toLowerCase())
        }
    }

   
    if(JSON.stringify(arr) ===JSON.stringify(arr.reverse()) ){
        return true
    }
    return false
};