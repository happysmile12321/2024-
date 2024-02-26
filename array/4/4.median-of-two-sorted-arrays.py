# @leet start
class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        mergenum = nums1+nums2
        mergenum = sorted(mergenum)
        # print(mergenum)
        if len(mergenum) % 2 == 0:
            n = len(mergenum) // 2
            return (mergenum[n-1]+mergenum[n])/2
        else:
            n = len(mergenum) // 2
            return mergenum[n]


# nums1 = [1, 3]
# nums2 = [2]
# Solution().findMedianSortedArrays(nums1, nums2)
# @leet end
