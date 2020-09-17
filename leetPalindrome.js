/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
        
    const input = x.toString();
    const inputString = input.split('');
    
    //console.log(inputString);
 
    
    const matchTo = inputString.length - 1;
    //console.log(inputString[Number(matchTo)]);
    //console.log(inputString[1]);
    if (inputString[0] == "-") { 
                return false;}
    else if (inputString.length >= 7){
        if ((inputString[1] !== inputString[Number(matchTo)-1]) || (inputString[2] !== inputString[Number(matchTo)-2]) || (inputString[4] !== inputString[Number(matchTo)-4])){
            return false;
        }
        else return true;
    }

    else if (inputString[0] == inputString[Number(matchTo)])
        {return true;}

        else{ return false;}


    }
console.log(isPalindrome(2222222));
