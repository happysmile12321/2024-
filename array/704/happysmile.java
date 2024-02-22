/*
 * @lc app=leetcode.cn id=704 lang=java
 *
 * [704] 二分查找
 */

// @lc code=start
class Solution {
    public int search(int[] nums, int target) {
        // 左闭右闭的写法
        // int left = 0, right = nums.length - 1;
        // while (left <= right) {
        // int middle = (left + right) / 2;
        // if (nums[middle] < target) {
        // left = middle + 1;
        // } else if (nums[middle] > target) {
        // right = middle - 1;
        // } else {
        // return middle;
        // }
        // }
        // return -1;
        // 左闭右开的写法
        int left = 0, right = nums.length;
        while (left < right) {
            int middle = (left + right) / 2;
            if (nums[middle] < target) {
                left = middle + 1;
            } else if (nums[middle] > target) {
                right = middle;
            } else {
                return middle;
            }
        }
        return -1;

    }
}
// @lc code=end
