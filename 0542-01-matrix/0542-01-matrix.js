/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let start = []
    let output = mat.map((arr, i) => arr.map((num, j) => {
        if (num === 0) {
            start.push([i, j])
            return 0
        }
        return null
    }))

    let queue = start
    let visited = new Set()
    while (queue.length > 0) {
        let [i, j] = queue.shift()
        let string = i + "," + j
        let adjacent = []

        if (visited.has(string)) continue
        visited.add(string)

        if (i - 1 >= 0) {
            let nextString = (i - 1) + "," + j
            if (!visited.has(nextString)) queue.push([i - 1, j])
            if (output[i - 1][j] !== null) adjacent.push(output[i - 1][j])
        }
        if (j - 1 >= 0) {
            let nextString = i  + "," + (j-1)
            if (!visited.has(nextString)) queue.push([i, j - 1])
            if (output[i][j - 1] !== null) adjacent.push(output[i][j - 1])
        }
        if (i + 1 < mat.length) {
             let nextString = (i + 1) + "," + j
            if (!visited.has(nextString)) queue.push([i + 1, j])
            if (output[i + 1][j] !== null) adjacent.push(output[i + 1][j])
        }
        if (j + 1 < mat[0].length) {
            let nextString = i  + "," + (j+1)
            if (!visited.has(nextString)) queue.push([i, j + 1])
            if (output[i][j + 1] !== null) adjacent.push(output[i][j + 1])
        }

        if (output[i][j] === 0) continue
        output[i][j] = Math.min(...adjacent) + 1
    }
    return output

};