// 1) create array of numbers
// 2) store length of array
// 3) function loop through the array and display the array
// 4) function loop through the array and display the summation of the array numbers
// 5) display all in main function
// 6) calc avg and display

// 1)
var textArea = document.getElementById('input').innerHTML;
var stringArray = textArea.split(' ');
var numbersArray = stringArray.map(Number);


// 2)
var arrayLength = numbersArray.length;

// 3)
function array(){
    var msg = '';
    for(var i = 0; i < arrayLength; i++){
        msg += numbersArray[i] + '<br> ';
    }
    return msg;
}

var details = document.getElementById('array');
details.innerHTML = msg;

// 4)
function sum(){
    var sum = 0;
    for(var j = 0; j < arrayLength; j++){
        sum += numbersArray[j];
    }
    return sum;
}

// 5)
function average(){
    return parseFloat((sum()/arrayLength));
}

function main(){
    var details = document.getElementById('array');
    details.innerHTML = array();
    var summation = document.getElementById('sum');
    summation.innerHTML = sum();
    var avg = document.getElementById('avg');
    avg.innerHTML = average();
}

function median(){
    
}
