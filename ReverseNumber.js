/* 

Leet code question : #7 Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
Input: x = 123
Output: 321

*/
function reverseNumber(num) {
    var reverse =0;
    while(num!=0)   {
        var digit = num%10;
        reverse = reverse*10 + digit;
        num = parseInt(num / 10);
    }
    return reverse;
}
console.log(reverseNumber(123)); // 321