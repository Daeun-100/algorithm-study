/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let result = ""
    //앞에 공백 제거
    let i = 0;
    while (s[i] === " ") {
        i += 1;
    }
    s = s.substr(i)
    i=0;
    if (s[i] === "-" || s[i] === "+") {
        result += s[i]
        i += 1;
    }
    console.log("s",s)
    console.log("result",result)
    while (s[i] === "0") {
        i += 1;
    }
    
    

    while (!Number.isNaN(Number(s[i]))&&s[i]!==" ") {

        result += s[i]
        i += 1;
        console.log(result)
    }
    if(Number.isNaN(Number(result))) return 0
    if(Number(result)<-(2**31)) return -(2**31)
    if(Number(result)>2**31-1) return 2**31-1

    return Number(result)


};