function countDigits(num)    {
    return num.toString().length;
}

function armstrong(number)  {
    var sum = 0,num = number;
    var len = countDigits(number);
    while(number!=0)    {
        var digit = number % 10;
        sum = sum + digit**len;
        number = parseInt(number/10);
    }
    if(sum == num)
        return "Armstrong Number";
    else 
        return "Not an Armstrong Number";
}

console.log(armstrong(370));