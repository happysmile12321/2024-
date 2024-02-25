/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const loopCount = nums.length
  let sum = 0,
    minLength = Infinity,
    left = 0,
    right = 0
  while (right < loopCount) {
    sum += nums[right]
    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1)
      sum -= nums[left++]
    }
    ++right
  }
  return minLength === Infinity ? 0 : minLength
}

// /**
//  * @param {number} target
//  * @param {number[]} nums
//  * @return {number}
//  */
// var minSubArrayLen = function (target, nums) {
//   const loopCount = nums.length
//   let sum = 0,
//     minLength = Infinity,
//     left = 0,
//     right = 0,
//     isPref = false
//   while (right < loopCount) {
//     if (!isPref) {
//       sum += nums[right]
//     }
//     if (sum >= target) {
//       minLength = Math.min(minLength, right - left + 1)
//       sum -= nums[left++]
//       isPref = true
//     } else {
//       isPref = false
//       ++right
//     }
//   }
//   return minLength === Infinity ? 0 : minLength
// }

// /**
//  * @param {number} target
//  * @param {number[]} nums
//  * @return {number}
//  */
// var minSubArrayLen = function (target, nums) {
//   const loopCount = nums.length
//   let sum = 0
//   let minLength = Infinity
//   for (let i = 0, item = nums[i], j = 0; j < loopCount; ) {
//     if (item === target) return 1
//     sum += item
//     if (sum >= target) {
//       const currentLength = i - j + 1
//       minLength = Math.min(currentLength, minLength)
//       sum -= nums[j++]
//       item = 0
//       continue
//     }
//     if (i < loopCount) {
//       item = nums[++i] || 0
//       continue
//     }
//     ++j
//     item = 0
//   }
//   return minLength > loopCount ? 0 : minLength
// }
