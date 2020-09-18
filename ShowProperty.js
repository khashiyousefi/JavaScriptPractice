const movie = {
    title: "007",
    releaseYear: 2020,
    rating: 5.0,
    director: "Shabass"

};

showproperty(movie);

function showproperty(obj){
    for (let key in obj){
        if (typeof obj[key] =="string")
        console.log(key, obj[key]);
    }

}