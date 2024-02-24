object Solution {
    def sortedSquares(nums: Array[Int]): Array[Int] = {
        return nums.map(x => x * x).sortWith(_ < _);
    }
}
