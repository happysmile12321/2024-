class Solution {
    public int removeElement(int[] nums, int val) {
        int leftHand = -1, rightHand = 0;
        for(;rightHand<nums.length;rightHand++){
            if(nums[rightHand]!=val){
                leftHand++;
                nums[leftHand] = nums[rightHand];
            }
        }
        return leftHand+1;
    }
}
