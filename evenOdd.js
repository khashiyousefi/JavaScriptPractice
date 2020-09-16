showNumbers(10);

function showNumbers (limit){
    const even = 2;
    for (let i = 0; i <= limit ; i++){
        if (i % even == 0) {
            console.log(i, "EVEN");
        }
        else
            console.log(i, "ODD");

    //const message = (i % even === 0) ? "EVEN" : "ODD"
    //console.log(i, message);

    }
}