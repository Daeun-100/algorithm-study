/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let start = []
    const rows = mat.length;
    const cols = mat[0].length;
    let output = mat.map((arr, i) => arr.map((num, j) => {
        if (num === 0) {
            start.push([i, j])
            return 0
        }
        return Infinity
    }))

    let queue = start

    const directions = [
        [-1, 0], // 위
        [1, 0],  // 아래
        [0, -1], // 왼쪽
        [0, 1]   // 오른쪽
    ];

    while (queue.length > 0) {
        let [r, c] = queue.shift()
        //string을 만들고 set으로 확인하는 작업이 오래걸림
        // let string = i + "," + j
   

        for (const [dr, dc] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;

            // 유효한 범위 확인 및 거리 갱신
            if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                output[newRow][newCol] > output[r][c] + 1
            ) {
                output[newRow][newCol] = output[r][c] + 1;
                queue.push([newRow, newCol]);
            }
        }

    }
    return output

};