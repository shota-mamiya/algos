/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let minBuy = Infinity; // set to infinity because on first iteration, no number can be greater than infinity. 
  // this will allow for however high of number to start
  let maxProfit = 0;

  for(i = 0; i < prices.length; i++) {
    if(prices[i] < minBuy) { 
      minBuy = prices[i];
    } else if (prices[i] - minBuy > maxProfit) {
      maxProfit = prices[i] - minBuy;
    }
  } return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))