/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0
  const length = nums.length
  for (let j = 0, value = nums[j]; j < length; value = nums[++j]) {
    if (value !== val) {
      nums[i++] = value
    }
  }
  return i
}

// var removeElement = function (nums, val) {
//   let i = 0
//   for (const value of nums) {
//     if (value !== val) {
//       nums[i++] = value
//     }
//   }
//   return i
// }
