/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // 这个算法的前提是nums是一个有序的数组,如果是乱序则无法使用
  let l = 0,
    r = nums.length - 1
  const res = new Array(nums.length).fill(0)
  // 从后往前循环从最大的开始找
  // 这里有一循环的冷知识(与本题无关),读取对象属性的时候有一定的性能开销,而中间循环条件每次都会读取一次!
  for (let i = res.length - 1; i >= 0; i--) {
    // 求两端的数平方
    let left = nums[l] ** 2,
      right = nums[r] ** 2
    // 拿最大的,放到i的位置,然后偏移头尾指针
    if (left > right) {
      res[i] = left
      l++
    } else {
      res[i] = right
      r--
    }
  }
  return res
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums.map((num) => num * num).sort((a, b) => a - b)
}
