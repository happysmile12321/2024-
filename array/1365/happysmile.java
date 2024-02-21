class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int[] res = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            int currentNum = nums[i];
            int currentIdx = i;
            for (int j = 0; j < nums.length; j++) {
                if (i == j)
                    continue;
                int anotherNum = nums[j];
                if (currentNum > anotherNum) {
                    res[currentIdx]++;
                }
            }
        }
        return res;
    }
}
