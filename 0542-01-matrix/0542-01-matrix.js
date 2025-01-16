/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let highest = mat.length + mat[0].length;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                continue;
            }
            mat[i][j] = Math.min(i > 0 ? mat[i - 1][j] : highest, j > 0 ? mat[i][j - 1] : highest) + 1;
        }
    }

    for (let i = mat.length - 1; i >= 0; i--) {
        for (let j = mat[0].length - 1; j >=0; j--) {
            if (mat[i][j] === 0) {
                continue;
            }
            mat[i][j] = Math.min(i + 1 < mat.length ? mat[i + 1][j] + 1 : highest, j + 1 < mat[0].length ? mat[i][j + 1] + 1 : highest, mat[i][j]);
        }
    }
    return mat;
};