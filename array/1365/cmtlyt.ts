function smallerNumbersThanCurrent(nums: number[]): number[] {
  const map = {}
  void [...nums]
    .sort((a, b) => a - b)
    .forEach((num, index) => {
      map[num] ??= index
    })
  return nums.map((item) => map[item])
  // const result = []
  // const length = nums.length
  // for (let i = 0, item = nums[i]; i < length; item = nums[++i]) {
  //     let count = 0
  //     for (const tItem of nums) {
  //         if (item > tItem) {
  //             ++count
  //         }
  //     }
  //     result[i] = count
  // }
  // return result
}
