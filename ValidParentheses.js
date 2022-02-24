/**
 * @param {string} s
 * @return {boolean}
 */

let s = "({})"
var isValid = function(s) {

    // use an array as a "stack" to push the closing bracket to the end of the array
    // when on an opening bracket, push the closing bracket to the end of the array

    let stack = [] // creating new array to push the closing bracket and seeing if the next bracket matches the bracket at the end of array

    if (s.length % 2 !== 0 || s.length < 2) return false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(")")
        }
        if (s[i] === "{") {
            stack.push("}")
        }
        if (s[i] === "[") {
            stack.push("]")
        }
        if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
            if (stack[stack.length - 1] === s[i]) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    if (stack.length == 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isValid(s));