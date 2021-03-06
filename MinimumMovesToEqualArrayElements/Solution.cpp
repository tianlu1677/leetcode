class Solution {
public:
    int minMoves(vector<int>& nums) {
        int size = nums.size();
        if (size < 2) return 0;
        int min = nums[0];
        for (int i = 1; i < size; i++) {
            if (min > nums[i]) min = nums[i];
        }
        int cnt = 0;
        for (int i = 0; i < size; i++) {
            cnt += nums[i] - min;
        }
        return cnt;
    }
};