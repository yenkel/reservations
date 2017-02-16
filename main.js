var reservations = {
    'Bob': { claimed: false },
    'Ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation');

var claimReservation = function() {
    // write your code here!
    if (reservations[name]) {
        if (reservations[name].claimed === false) {
            alert("Welcome " + name + " Please follow me");
        } else {
            alert("Hi " + name + " Someone is waiting for you ");
        }
    } else {
        reservations[name] = { claimed: true }
        alert("Hi " + name + " a new reservation has been made for you");
    }
}

claimReservation();
