//object constructor notation page 108
function SquareArea(length, width) {
    this.length = length;
    this.width = width;
    this.calcArea = function() {
        return (this.length * this.width);
    }
    this.checkRectangle = function() {
        if(this.length === this.width)
        {
            return 'Yes';
        }
        else
            return 'No';
    }
}

var square1 = new SquareArea(5, 5);
var square2 = new SquareArea(10, 30);

var details1 = 'Length: ' + square1.length + ' Width: ' + square1.width + ' Area: ' + square1.calcArea() + ' Is square: ' + square1.checkRectangle();
var details2 = 'Length: ' + square2.length + ' Width: ' + square2.width + ' Area: ' + square2.calcArea() + ' Is square: ' + square2.checkRectangle();

var shape1 = document.getElementById('shape1');
shape1.textContent = details1;

var shape2 = document.getElementById('shape2');
shape2.textContent = details2;
