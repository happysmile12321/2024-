# @leet start
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if s == "":
            return 0
        stack = []
        maxLength = 0
        for i in range(len(s)):
            #     if s[i] not in stack:
            #         stack.append(s[i])
            #         if len(stack) > maxLength:
            #             maxLength = len(stack)
            #     else:
            #         # if len(stack) > maxLength:
            #         #     maxLength = len(stack)
            #         stack.clear()
            #         stack.append(s[i])
            # return maxLength

            for j in range(i+1, len(s)):
                if s[j] not in stack:
                    stack.append(s[j])
                    # print(stack)
                else:
                    i = j
                    if len(stack) > maxLength:
                        maxLength = len(stack)
                    stack.clear()
                    break
            if len(stack) > maxLength:
                maxLength = len(stack)
            stack.clear()
        return maxLength

# result=Solution().lengthOfLongestSubstring("")
# print(result)
# @leet end
