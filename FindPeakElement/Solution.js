/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var size = nums.length;
    if (size < 2) return 0;
    if (nums[0] > nums[1]) return 0;
    for (var i = 1; i < size - 1; i++) {
        if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) return i;
    }
    if (nums[size - 2] < nums[size - 1]) return size - 1;
    return 0;
};
