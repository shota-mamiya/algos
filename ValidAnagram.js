/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// INPUTS
s = "(wor(";
t = "(row(";

// More thorough method 
var isAnagram = function(s, t) {

  if ( s.length !== t.length) {
    return false
  }
  
  let hashMap = {};

  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]]) {
      hashMap[s[i]]++;
    } else {
      hashMap[s[i]] = 1;
    }
  }
  
  for (let j = 0; j < t.length; j++) {
    if (hashMap[t[j]]) {
      hashMap[t[j]]--
      
      if (hashMap[t[j]] == 0) {
        delete hashMap[t[j]]
      }
      
    } else {
      return false;
    }
  } return true;
};



// More easily readable method with .split/.sort/.join
var isAnagram = function(s, t) {
    if (s.length === t.length) {
        let sortedS = s.split("").sort().join("")
        let sortedT = t.split("").sort().join("")

        console.log(sortedS)
        console.log(sortedT)

        for(i = 0; i < s.length; i++) {
            if(sortedS[i] != sortedT[i]) {
                return false
            }
        } return true
    } return false
};


console.log(isAnagram(s,t));