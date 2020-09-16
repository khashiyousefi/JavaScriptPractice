const array = [0, 1, NaN, 2, null, '', false, undefined];

console.log(countTruthy(array));


function countTruthy(array){
    let count = 0;
    // for (let i = 1; i <= array.length; i++){
        
    // if (typeof(array[i]) == 'number'){
    //     count++;
    //     }
    // }
    // return count;

    for (let item of array){
        if (item)
        count++;
    }
    return count;
}