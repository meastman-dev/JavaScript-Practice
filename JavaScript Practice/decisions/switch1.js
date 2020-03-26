var msg;
var level = 3;

switch(level) {
    case 1:
        msg = 'Good luck on your challenge!';
        break;
    case 2:
        msg = 'Second round.';
        break;
    case 3: 
        msg = 'Better luck next time';
        break;
    default:
        msg = 'Good luck';
        break;
}

var detail = document.getElementById('switch');
detail.textContent = msg;