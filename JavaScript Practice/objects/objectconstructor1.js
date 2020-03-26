
//object constructor notation page 108
function Hotel(name, rooms, booked)  {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    }
}  

var quayHotel = new Hotel('Quay', 20, 10);
var parkHotel = new Hotel('Park', 50, 37);

var detailsOne = quayHotel.name + ' rooms: ' + quayHotel.checkAvailability();
var detailsTwo = parkHotel.name + ' rooms: ' + parkHotel.checkAvailability();

var hotelOne = document.getElementById('hotel1');
hotelOne.textContent = detailsOne;

var hotelTwo = document.getElementById('hotel2');
hotelTwo.textContent = detailsTwo;