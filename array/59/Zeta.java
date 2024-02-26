class Solution {
    public int[][] generateMatrix(int n) {
        int[][] ans = new int[n][n];
        int k = 1;
        int top = 0;
        int left = 0;
        int bottom = n-1;
        int right = n-1;
        while ( left<=right && top<=bottom ) {
            for ( int i=left; i<=right; i++ ) {
                ans[top][i] = k++;
            }
            top++;
            for ( int i=top; i<=bottom; i++ ) {
                ans[i][right] = k++;
            }
            right--;
            for ( int i=right; i>=left; i-- ) {
                ans[bottom][i] = k++;
            }
            bottom--;
            for ( int i=bottom; i>=top; i-- ) {
                ans[i][left] = k++;
            }
            left++;
        }
        return ans;
    }
}
