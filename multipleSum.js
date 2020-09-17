console.log(sum(10));

//multiple of 5 and 3

function sum(limit){
    let total = 0;

    // for (let i = 0; i<= limit; i++){
    //     if (i % 3 == 0)
    //         total = i + total;
        
    //     else if (i % 5 == 0)
    //         total = i + total;
    // }

    for (let i = 0; i<= limit; i++)
        if (i % 3 == 0 || i % 5 == 0)
            total+=i;
            
    return total;
}