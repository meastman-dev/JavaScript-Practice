//Traditional DOM Event handling
//element.onevent = functionname;
//best for single use functions such as basic behaviors

function hello(){
    var msg = document.getElementById('hello'); //get id of hello
    msg.innerHTML = 'Hello World'; //set id of hello's text as 'Hello World'
}

var button = document.getElementById('button'); //get id of button (a button)
button.onclick = hello; //when button id is clicked, call function hello

//Event listening
//element.addEventListener('event', functionName [,Boolean]);

function goodbye(){
    var msg = document.getElementById('goodbye'); //get id of goodbye
    msg.innerHTML = 'Goodbye World'; //set id of goodbye's text as 'Goodbye World'
}

var button2 = document.getElementById('button2'); //get id of button (a button)
button2.addEventListener('click', goodbye, false); //onclick event is not preceded by 'on'

//Event listening with parameters and multiple functions
//element.addEventListener('event', function(){ functionName(parameters)} [,Boolean]);
//functions can be written in or out of the event listener but must be called in the event listener either way
//best for multiple functions with parameters or data retrievals

// function addition(add1, add2){
//     var sum = add1 + add2;
//     var msg = document.getElementById('addition');
//     msg.innerHTML = sum;
// }

var button3 = document.getElementById('button3');
button3.addEventListener('click', function() {
    function addition(add1, add2){
        var sum = add1 + add2;
        var msg = document.getElementById('addition');
        msg.innerHTML = sum;
    }
    function subtraction(sub1, sub2){
        var difference = sub1 - sub2;
        var msg = document.getElementById('subtraction');
        msg.innerHTML = difference;
    };
    addition(5,3); 
    subtraction(5,3);
}, false);

// function subtraction(sub1, sub2){
//     var difference = sub1 - sub2;
//     var msg = document.getElementById('subtraction');
//     msg.innerHTML = difference;
// }