const marks = [80,80,50];
//1-59 F
//60-69 D
//70-79 C
//80-89 B
//90-100 A
console.log(calGrade(marks));

function calGrade(marks){

    let average = 0;
    for (let i of marks){
        average = average + (i/marks.length);
    }
    // for (let i in marks)
    //     average = average + (marks[i] / marks.length);
    
    if (average <= 59) return "F";
    else if (average <= 69 && average >= 60) return ("D, Average "+ average);
    else if (average <= 79 && average >= 70) return ("C, Average "+ average);
    else if (average <= 89 && average >= 80) return ("B, Average "+ average);
    else if (average <= 100 && average >= 90) return ("A, Average "+ average);
}