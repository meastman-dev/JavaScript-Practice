var table = {
    legs: 4,
    type: 'Circular',
    color: 'Brown'
};

var details = 'Table type: ' + table.type + ' Table legs: ' + table.legs + ' Table color: ' + table.color;

var tableObject = document.getElementById('table');
tableObject.textContent = details;
