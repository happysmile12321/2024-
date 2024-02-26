/* 
给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

 

示例 1：

输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
示例 2：

输入：target = 4, nums = [1,4,4]
输出：1
示例 3：

输入：target = 11, nums = [1,1,1,1,1,1,1,1]
 */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0, right = 0;
    let res = nums.length + 1 ;
    let sum = 0;
    while(right < nums.length){
        sum+= nums[right]
        if(sum >= target){
            //SUM大，左指针移动
            while(sum - nums[left] >= target){
                sum -= nums[left++]
            }
            res = Math.min(res, right - left + 1)
        }
        right ++;
    }
    return res === nums.length + 1 ? 0: res
 };

/* 
左右指针划定一个区间，如果sum大于target left++ 反之 right++
思路非常简单 细节就是min 的运用，目的是 找出最小的子数组
最后的return 返回 用三元 进行判断，如果 没改变说明找不到 那就返回1  
*/