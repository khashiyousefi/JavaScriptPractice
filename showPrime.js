
console.log(showPrime(20));
function showPrime(limit){
    var prime= [];
    for (let i = 2; i <=limit; i++){
        //if (limit[i] % )
        if (i % i == 0)
            prime.push(i);
            //console.log(prime);

        for (let j = i - 1; j>=2; j--){
            if (i % j == 0){
                prime.pop(i);
                break;
            }
        }
    }
    return prime;
    //console.log(prime);
}