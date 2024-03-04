/*
 * @lc app=leetcode.cn id=209 lang=java
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int i = 0, j = 0;
        int sum = 0;
        int res = Integer.MAX_VALUE;
        for (; j < nums.length; j++) {
            sum += nums[j];
            while (i <= j && sum >= target) {
                int subLen = (j - i + 1);
                res = res < subLen ? res : subLen;
                sum -= nums[i++];
            }
        }
        return res == Integer.MAX_VALUE ? 0 : res;
    }
}
// @lc code=end
