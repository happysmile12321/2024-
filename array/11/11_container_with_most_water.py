from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_area = 0
        i = 0
        j = len(height) - 1
        while i < j:
            min_height = min(height[i], height[j])
            area = min_height * (j - i)
            if area > max_area:
                max_area = area
            if height[i] < height[j]:
                i += 1
            else:
                j -= 1
        return max_area


height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
main = Solution().maxArea(height)
print(main)
