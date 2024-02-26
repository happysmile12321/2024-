# @leet start
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if s == "":
            return 0
        stack = []
        maxLength = 0
        str = ""
        maxstr = ""
        for i in range(len(s)):
            stack.append(s[i])
            str += s[i]
            for j in range(i+1, len(s)):
                if s[j] != stack[0]:
                    stack.append(s[j])
                    str += s[j]
            else:
                # i = j
                if len(stack) > maxLength:
                    maxLength = len(stack)
                    maxstr = str
                stack.clear()
                str = ""
                break
            if len(stack) > maxLength:
                maxLength = len(stack)
                maxstr = str
            stack.clear()
            str = ""
        return maxstr
# @leet end
