import java.util.ArrayList;
import java.util.Arrays;

/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * <p>
 * 找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，
 * 并返回其长度。如果不存在符合条件的子数组，返回 0 。
 *
 * @Author: OvvO
 * @Description: TODO
 * @Date: Created in 19:39 2024/2/25
 * @Modified By:
 */
public class OvvO {
    public int minSubArrayLen(int target, int[] nums) {
        int[] sum = new int[nums.length + 1];

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] >= target) {
                return 1;
            }

            sum[i + 1] = nums[i] + sum[i];
        }

        if (sum[sum.length - 1] < target) {
            return 0;
        }

        int res = Integer.MAX_VALUE;


        for (int i = 0; i < sum.length - 2; ++i) {
            int low = i + 1, high = sum.length - 1;

            while (low < high) {
                int mid = (high + low) / 2;
                if (target > sum[mid] - sum[i]) low = mid + 1;
                else high = mid;
            }

            if (sum[high] - sum[i] >= target) {
                res = Math.min(res, high - i);
            }

        }
        return res == Integer.MAX_VALUE ? 0 : res;
    }
}
