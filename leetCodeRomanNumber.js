/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let number = 0;

    const roman = {
        I: ['I', 1],
        V: ['V', 5],
        X: ['X', 10],
        L: ['L', 50],
        C: ['C', 100],
        D: ['D', 500],
        M: ['M', 1000]

    };
    const splitWord = s.split('');
    for (let i in splitWord){
        //console.log("I am here");
        //console.log(roman.I[0]);
        if (splitWord[i] == roman.I[0]){
            number++;
        }

        if (splitWord[i] == roman.V[0]){
            if (splitWord[i-1] == roman.I[0]){
                number--;
                number = number + roman.V[1]- roman.I[1];
            } else {
            number = number + roman.V[1];
            }
        }

        else if (splitWord[i] == roman.X[0]){
            if (splitWord[i-1] == roman.I[0]){
                number--;
                number = number + roman.X[1] - roman.I[1];
            } 
            else if ((splitWord[i-1] == roman.V[0])){
                number = number - roman.V[1];
                number = number + roman.X[1] - roman.V[1];
            }
            else {
            number = number + roman.X[1];
            }
        }

        else if (splitWord[i] == roman.L[0]){
            if (splitWord[i-1] == roman.I[0]){
                number--;
                number = number + roman.L[1] - roman.I[1];
            } 
            if ((splitWord[i-1] == roman.V[0])){
                number = number - roman.V[1];
                number = number + roman.L[1] - roman.V[1];
            }
            else if ((splitWord[i-1] == roman.X[0])){
                number = number - roman.X[1];
                number = number + roman.L[1] - roman.X[1];
            }
            else {
            number = number + roman.L[1];
            }
        }
        else if (splitWord[i] == roman.C[0]){
            if (splitWord[i-1] == roman.I[0]){
                number--;
                number = number + roman.C[1] - roman.I[1];
            } 
            if ((splitWord[i-1] == roman.V[0])){
                number = number - roman.V[1];
                number = number + roman.C[1] - roman.V[1];
            }
            if ((splitWord[i-1] == roman.X[0])){
                number = number - roman.X[1];
                number = number + roman.C[1] - roman.X[1];
            }
            else if ((splitWord[i-1] == roman.L[0])){
                number = number - roman.L[1];
                number = number + roman.C[1] - roman.L[1];
            }
            else {
            number = number + roman.C[1];
            }
        }
        else if (splitWord[i] == roman.D[0]){
            if (splitWord[i-1] == roman.I[0]){
                number--;
                number = number + roman.D[1] - roman.I[1];
            } 
            if ((splitWord[i-1] == roman.V[0])){
                number = number - roman.V[1];
                number = number + roman.D[1] - roman.V[1];
            }
            if ((splitWord[i-1] == roman.L[0])){
                number = number - roman.L[1];
                number = number + roman.D[1] - roman.L[1];
            }
            if ((splitWord[i-1] == roman.C[0])){
                number = number - roman.C[1];
                number = number + roman.D[1] - roman.C[1];
            }
            else if ((splitWord[i-1] == roman.X[0])){
                number = number - roman.X[1];
                number = number + roman.D[1] - roman.X[1];
            }
            else {
            number = number + roman.D[1];
            }
        }
        else if (splitWord[i] == roman.M[0]){
            if (splitWord[i-1] == roman.I[0]){
                number--;
                number = number + roman.M[1] - roman.I[1];
            }
            if ((splitWord[i-1] == roman.V[0])){
                number = number - roman.V[1];
                number = number + roman.M[1] - roman.V[1];
            }
            if ((splitWord[i-1] == roman.X[0])){
                number = number - roman.X[1];
                number = number + roman.M[1] - roman.X[1];
            }
            if ((splitWord[i-1] == roman.L[0])){
                number = number - roman.L[1];
                number = number + roman.M[1] - roman.L[1];
            }
            if ((splitWord[i-1] == roman.C[0])){
                number = number - roman.C[1];
                number = number + roman.M[1] - roman.C[1];
            }
            else if ((splitWord[i-1] == roman.D[0])){
                number = number - roman.D[1];
                number = number + roman.M[1] - roman.D[1];
            } 
            else {
            number = number + roman.M[1];
            }
        }
    }
    return number;
    
};

console.log(romanToInt("MCMXCIV"));