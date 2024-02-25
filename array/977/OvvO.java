import java.util.PriorityQueue;

/**
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * @Author: OvvO
 * @Description: TODO
 * @Date: Created in 19:26 2024/2/25
 * @Modified By:
 */
public class OvvO {
    public int[] sortedSquares(int[] nums) {
        PriorityQueue<Integer> integers = new PriorityQueue<>();
        for (int num : nums) {
            integers.add(num*num);
        }
        int[] ints = new int[nums.length];
        int i = 0;
        while (!integers.isEmpty()) {
            ints[i] = integers.poll();
            i++;
        }

        return ints;
    }
}
