var i =1;
var msg = '';

while(i < 10){
    msg += i + ' x 5 = ' + (i * 5) + ' ';
    i++;
}

var detail = msg;
var answer = document.getElementById('answer2');
answer.textContent = msg;
