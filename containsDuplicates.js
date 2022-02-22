/**
 * @param {number[]} nums
 * @return {boolean}
 */

// ON^2 solution, slower runtime but better space complexity
// 1852 ms, 48.5 mb

 var containsDuplicate = function(nums) {


    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] == nums[j]) {
          return true
        }
      } 
    } return false
};

// O of N solution, faster but worse space complexity
// 129 ms, 51.2 mb

var containsDuplicate = function(nums) {

    let hashMap = {}
  
    for (let i = 0; i < nums.length; i++) {
      if (hashMap[nums[i]]) {
        return true;
      } else {
        hashMap[nums[i]] = 1
      }
    } return false
  }
  
  console.log(containsDuplicate([10,4,7,40,5]));