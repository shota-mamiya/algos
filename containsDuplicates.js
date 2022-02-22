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