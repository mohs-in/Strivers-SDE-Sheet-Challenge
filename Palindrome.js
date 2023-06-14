/* 

Leet code question : #9 Palindrome Number
Given an integer x, return true if x is a palindrome, and false otherwise.
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0)
        return false;
    else    {
        var temp = x;
        var reverse = 0;
        while(temp!=0) {
            var digit = temp%10;
            reverse = reverse * 10 + digit;
            temp = parseInt(temp/10);
        }
        if(x == reverse)
            return true;
    }
    return false;

};
console.log(isPalindrome(-121)); // false