/*
 * @lc app=leetcode.cn id=59 lang=java
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
class Solution {
    public int[][] generateMatrix(int n) {
        int res[][] = new int[n][n];
        int count = 1;
        int loop = 1;
        int startX = 0, startY = 0;
        int offset = 1;
        int i, j;
        while (loop <= n / 2) {
            // 上
            for (j = startY; j < n - offset; j++) {
                res[startX][j] = count++;
            }
            // 右
            for (i = startX; i < n - offset; i++) {
                res[i][j] = count++;
            }
            // 下
            for (; j > startY; j--) {
                res[i][j] = count++;
            }
            // 左
            for (; i > startX; i--) {
                res[i][startY] = count++;
            }
            offset++;
            loop++;
            startX++;
            startY++;
        }
        if (n % 2 == 1) {
            res[startX][startY] = count++;
        }
        return res;
    }
}
// @lc code=end

