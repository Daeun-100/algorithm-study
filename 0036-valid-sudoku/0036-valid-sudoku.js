/**
 * @param {character[][]} board
 * @return {boolean}
 */


var isValidSudoku = function (board) {
    //row확인
    for (let i = 0; i < board.length; i++) {
        const numbers = board[i].filter((num) => num != ".")
        if (new Set(numbers).size != numbers.length) {
            return false
        }
    }
    //column확인
    for (let j = 0; j < board[0].length; j++) {
        let numbers = []
        board.forEach((arr) => {
            if (arr[j] === ".") return
            numbers.push(arr[j])
        })
        if (new Set(numbers).size != numbers.length) {
            return false
        }

    }
    //3*3확인
    let startI = 0;
    let startJ = 0;
    while (startI < 9 && startJ < 9) {
        let numbers = []
        for (let i = startI; i < startI + 3; i++) {
            for (let j = startJ; j < startJ + 3; j++) {
                if (board[i][j] === ".") continue
                numbers.push(board[i][j])
            }

        } 
        console.log(numbers)
        if (new Set(numbers).size != numbers.length) {
            return false
        }
        startJ += 3
        if (startJ === 9) {
            startI += 3
            startJ = 0
        }

    }



    return true
};