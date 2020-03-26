var literature = 90;
var math = 75;
var history = 50;
var min = 60;

var scores = 'Literature: ' + literature + ' Math: ' + math + ' History: ' + history;

function valLit() {
    if(literature >= min) {
        return 1;
    }
    else
        return 0;
}

function valMath() {
    if(math >= min) {
        return 1;
    }
    else
        return 0;
}

function valHistory() {
    if(history >= min) {
        return 1;
    }
    else
        return 0;
}

var avg = (valLit() + valMath() + valHistory()) / 3;
function valAvg() {
    if(avg >= 0.5) {
        return 'You passed the semester';
    }
    else
        return 'You failed the semester';
}


var passed = valAvg();

var grades = document.getElementById('grades');
grades.textContent = scores;

var passorfail = document.getElementById('passorfail');
passorfail.textContent = passed;

