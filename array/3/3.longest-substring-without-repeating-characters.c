// @leet start
#include <stdbool.h>
#include <stdio.h>
#include <string.h>
int lengthOfLongestSubstring(char *s) {
  int n = strlen(s);
  if (n == 0) {
    return 0;
  }

  int maxLength = 0;
  for (int i = 0; i < n; i++) {
    bool visited[256] = {false}; // 标记字符是否出现过
    int length = 0;
    for (int j = i; j < n; j++) {
      if (visited[(unsigned char)s[j]]) {
        break;
      }
      visited[(unsigned char)s[j]] = true;
      length++;
    }
    if (length > maxLength) {
      maxLength = length;
    }
  }
  return maxLength;
}
// @leet end
