var i = 1;
var msg = '';

do {
    msg += i + ' x 5 = ' + (i * 5) + ' ';
    i++;
} while(i < 1);

var detail = msg;
var answer = document.getElementById('answer3');
answer.textContent = msg;