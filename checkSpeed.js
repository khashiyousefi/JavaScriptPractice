checkSpeed(80);

function checkSpeed(speed){
    const speedLimit =70;
    if (speed <=74) {
       return console.log("OK");
    }

    //else if  (speed > 74){

    const point = Math.floor((speed - speedLimit) / 5);

    if (point >= 12){
    console.log("License is Suspended");
    }
    console.log("You Got " + point + " Point");
    //}

}