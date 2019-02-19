var myTimer = 50;

var shipParameters = {
    fuel: 70
};

var fuelObject = document.querySelector('.fuelContainer');

// CLOCK
function time() {
var date = new Date();
    
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

document.getElementById("time").innerHTML = hour + " : " + min + " : " + sec;

}

// CLOCK END

// calling functions every second
var count = setInterval(function() {
    time();
    fuel();

}, myTimer);


function fuel(){
    shipParameters.fuel -= 1;
    fuelObject.style.height = shipParameters.fuel + "%";
    
    if (shipParameters.fuel <= 50) {
        fuelObject.classList.add('.fuelLow');
        fuelObject.style.backgroundColor = "red";
    }
}


    















