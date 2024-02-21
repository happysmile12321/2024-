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
var smallerNumbersThanCurrent = function(nums) {
  const a = []
  for(let i = 0;i<nums.length;i++){
    let count = 0
    for(let j =0 ; j< nums.length;j++){
        if(nums[i] > nums[j]){
            count++
    }
  }
    a[i] = count
}
 return a
};