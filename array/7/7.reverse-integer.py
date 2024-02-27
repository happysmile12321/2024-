# @leet start
class Solution:
    def reverse(self, x: int) -> int:
        strx = str(x)
        # if x > (2**31-1) or x < (-2**31):
        #     return 0
        if strx[0] == "-":
            reserveStr = strx[1:]
            reserve = -int(reserveStr[::-1])
            if reserve < (-2**31):
                return 0
            else:
                return reserve
        else:
            strx = strx[::-1]
            reserve = int(strx)
            if reserve > 2**31-1:
                return 0
            else:
                return int(strx)
# @leet end
