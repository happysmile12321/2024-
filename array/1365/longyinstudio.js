/* 
1365. 有多少小于当前数字的数字
给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。

换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。

以数组形式返回答案。
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    // 初始化一个长度为101的数组，用于统计数字出现的次数
    const count = new Array(101).fill(0);
    // 计算每个数字出现的次数
    for (const num of nums) {
        count[num]++;
    }
    // 计算小于等于当前数字的数字个数
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    // 根据 count 数组返回结果数组
    return nums.map(num => num === 0 ? 0 : count[num - 1]);
};