var myTimer = 1000;

var shipParameters = {
    fuel: 100

};

var fuelObject = document.querySelector('.fuelBox');


// CLOCK AND DATE
function time() {
    
    var date = new Date();

    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var day = date.getDate();
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var year = date.getFullYear();

    document.getElementById("time").innerHTML = hour + " : " + min + " : " + sec + "<br>" + day + "." + month[date.getMonth()] + "." + year;
}

// CLOCK AND DATE END


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

    document.getElementById("converter").innerHTML = kilogramEarth + " kilograms on earth are " + kilogramMars + " kilogram on mars";
}

 Converter(100);

// CONVERTER END 

