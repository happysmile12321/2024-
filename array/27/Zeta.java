class Zeta {
    public int removeElement(int[] nums, int val) {
        
        int j = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == val) {
                continue;
            }
            nums[j++] = nums[i];
        }
        return j;
    }
}
