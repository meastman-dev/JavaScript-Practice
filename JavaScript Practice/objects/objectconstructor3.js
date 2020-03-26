//object constructor singular notation page 108

var cake = new Object();

cake.flavor = 'Red Velvet';
cake.icing = 'Chocolate';
cake.shape = 'Circular';
cake.sprinkles = true;

cake.checkSprinkles = function() {
    if(this.sprinkles)
    {
        return 'Yes';
    }
    else
        return 'No';
};

var details = 'Cake flavor: ' + cake.flavor + ' Icing: ' + cake.icing + ' Cake shape: ' + cake.shape + ' Are there sprinkles: ' + cake.checkSprinkles();

var typeCake = document.getElementById('cake');
typeCake.textContent = details;