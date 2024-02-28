# @leet start
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        result = []
        # n = len(nums)
        for d in range(len(nums)):
            targ = target-nums[d]
            # if nums[d] > target:
            #     break
            if d > 0 and nums[d] == nums[d-1]:
                continue
            new_nums = nums.copy()
            new_nums.pop(d)
            n = len(new_nums)
            for i in range(n-2):
                # if new_nums[i] > targ:
                #     break
                if i > 0 and new_nums[i] == new_nums[i-1]:
                    continue
                j, k = i+1, n-1
                while j < k:
                    sum = new_nums[i]+new_nums[j]+new_nums[k]
                    if sum > targ:
                        k -= 1
                        while j < k and new_nums[k] == new_nums[k+1]:
                            k -= 1
                    elif sum < targ:
                        j += 1
                        while j < k and new_nums[j] == new_nums[j-1]:
                            j += 1
                    else:
                        res = [nums[d], new_nums[i], new_nums[j], new_nums[k]]
                        res = sorted(res)
                        if res not in result:
                            result.append(res)
                        j += 1
                        k -= 1
                        while j < k and new_nums[j] == new_nums[j-1]:
                            j += 1
                        while j < k and new_nums[k] == new_nums[k+1]:
                            k -= 1
        return result
# @leet end
