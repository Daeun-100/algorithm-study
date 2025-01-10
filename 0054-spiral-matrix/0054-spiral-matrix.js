/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let maxI = matrix.length - 1
    let maxJ = matrix[0].length - 1
    let minI = 0;
    let minJ = 0;
    let i = 0;
    let j = 0;
    let result = []

    while (maxI >= minI && maxJ >= minJ) {
        if (j <= minJ) {
            for (j = minJ; j <= maxJ; j++) {
                result.push(matrix[i][j])
            }
            j = maxJ
            minI += 1
        } else if (j >= maxJ) {
            for (j = maxJ; j >= minJ; j--) {
                result.push(matrix[i][j])
            }
            j = minJ
            maxI -= 1;
        }

        if (i <= minI) {
            for (i = minI; i <= maxI; i++) {
                result.push(matrix[i][j])
            }
            i = maxI
            maxJ -= 1

        } else if (i >= maxI) {
            for (i = maxI; i >= minI; i--) {
                result.push(matrix[i][j])
            }
            i = minI
            minJ += 1;
        }

    }
    return result
};

//i,j가 있을떄
//i=0일때 j 끝까지 가면서 출력
//j끝까지가면 다른 i들에서 j번쨰꺼 출력
//i끝까지가면 j 1개씩 줄어들면서 출력
//j 0으로가면 i줄어듬
//j증가