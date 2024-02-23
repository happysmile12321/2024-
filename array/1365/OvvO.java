import java.util.Arrays;
import java.util.Comparator;

/**
 * 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。
 * <p>
 * 换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。
 * <p>
 * 以数组形式返回答案。
 *
 * @Author: OvvO
 * @Description: TODO
 * @Date: Created in 22:09 2024/2/23
 * @Modified By:
 */
public class OvvO {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int[][] numToIndex = new int[nums.length][2];
        for (int i = 0; i < nums.length; i++) {
            numToIndex[i][0] = nums[i];
            numToIndex[i][1] = i;
        }


        Arrays.sort(numToIndex, Comparator.comparingInt(o -> o[0]));
        int[] res = new int[nums.length];
        int tmp = 0;
        for (int i = 0; i < nums.length; i++) {
            int idx = numToIndex[i][1];
            if (i==0){
                res[idx] = 0;
            }else if (i!=0 && numToIndex[i][0] != numToIndex[i - 1][0]) {

                res[idx] = i;
            }else {
                res[idx] = res[numToIndex[i - 1][1]];
            }
        }
        return res;
    }
}
