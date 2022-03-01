// input = array
// output = number

// go through array and if the number is greater than the number currently in the new array, then add it to the new array

function maxSubArray (nums) {

    let solution = nums[0]; // setting a variable called 'solution' to the first number in the array

    for(let i = 1; i < nums.length; i++) { // looping through the array one by one
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1]) //  setting a variable to the current iteration 'nums[i]' to the result of the largest numbers between the current number/position and the previous number
        solution = Math.max(solution, nums[i]); // setting a variable 'solution' to the greatest number between what is currently the solution and the current position in the array
    }
    return solution;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));