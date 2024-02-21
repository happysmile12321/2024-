function twoSum(nums: number[], target: number): number[] {
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) return [i, hash[target - nums[i]]]
    hash[nums[i]] = i
  }
  return []
}
