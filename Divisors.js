function divisors(number)   {
    var arr = [];
    for(var i=1;i<=number;i++)   {
        if(number%i == 0)   
            arr.push(i);
        else 
            continue;
    }
    console.log(arr);
}

divisors(36);
