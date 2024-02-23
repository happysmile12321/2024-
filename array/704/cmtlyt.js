/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const currNum = nums[mid]
    if (target === currNum) return mid
    if (target < currNum) right = mid - 1
    else if (target > currNum) left = mid + 1
  }
  return -1
}
