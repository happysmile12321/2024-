/**  
*给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
*
 

示例 1：

输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
示例 2：

输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = []
    for(let i = 0,j = nums.length - 1 ; i <=j ;){
      const left = Math.abs(nums[i])
      const right = Math.abs(nums[j])
      if(right > left){
          res.unshift(right * right)
          j--
      }else{
          res.unshift(left*left)
          i++
      }
    }
    return res
 };

 /* 利用双指针的思想 
 数组有序  但分正负
 只需要先进行abs绝对值遍历一次 平方 一次unshift放到result的开头即可
 
 */