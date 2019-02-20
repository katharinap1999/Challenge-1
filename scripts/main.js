var myTimer = 1000;

var shipParameters = {
    fuel: 100

};

var fuelObject = document.querySelector('.fuelBox');

// CLOCK
function time() {
    var date = new Date();

    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    document.getElementById("time").innerHTML = hour + " : " + min + " : " + sec;
}

// CLOCK END

// FUEL 

// calling functions every second
var count = setInterval(function () {
    time();
    fuel();

}, myTimer);

var counter = 0;

function fuel() {

    if (counter == 0) {
        shipParameters.fuel -= 1;
        fuelObject.style.height = shipParameters.fuel + "%";
        fuelObject.innerHTML = shipParameters.fuel + "%";

        if (shipParameters.fuel <= 20) {
            fuelObject.style.backgroundColor = "red";
        }

        if (shipParameters.fuel == 0) {
            alert("You are out of Fuel!");
            fuelObject.innerHTML = "Out of fuel";
            counter = 1;
        }
    }
}

// FUEL END

// CONVERTER

function Converter(kilogramEarth) {

    var kilogramMars = kilogramEarth * 0.376;

    document.getElementById("converter").innerHTML = kilogramEarth + " kg on earth are " + kilogramMars + " kilogram on mars";
}

Converter(100);

// CONVERTER END 