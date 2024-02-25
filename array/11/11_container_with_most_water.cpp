#include <vector>
using namespace std;

class Solution {
public:
  int maxArea(vector<int> &height) {
    int max_area = 0;
    int i = 0;
    int j = height.size() - 1;
    while (i < j) {
      int h = min(height[i], height[j]);
      max_area = max(max_area, h * (j - i));
      while (height[i] <= h && i < j)
        i++;
      while (height[j] <= h && i < j)
        j--;
    }
    return max_area;
  }
};
