/*
 * @lc app=leetcode.cn id=977 lang=java
 *
 * [977] 有序数组的平方
 */

// @lc code=start
class Solution {
    public int[] sortedSquares(int[] nums) {
        int left = 0, right = nums.length - 1;
        int[] res = new int[nums.length];
        int ptr = 0;
        //头在两端的指针
        while (left <= right) {
            if (Math.abs(nums[left]) > Math.abs(nums[right])) {
                res[ptr] = nums[left] * nums[left];
                left++;
            } else {
                res[ptr] = nums[right] * nums[right];
                right--;
            }
            ptr++;
        }
        //数组反转
        left = 0;
        right = res.length - 1;
        while (left <= right) {
            int temp = res[left];
            res[left] = res[right];
            res[right] = temp;
            left++;
            right--;
        }
        return res;
    }
}
// @lc code=end
