var firebase = new Firebase("https://blazing-torch-6209.firebaseio.com/");

$(document).ready(function() {
    $("#save-button").click(setFirebase());
    $("#push-button").click(pushFirebase());
    $("#read-button").click(readFirebase());
});

function setFirebase() {
    firebase.set( {
        make: "Volkswagen",
        model: "up"
    });
}

function pushFirebase() {
    var pushRef = firebase.child("cars");
    pushRef.push( {
        make: "Volkswagen",
        model: "up"
    });
}

function readFirebase() {
    var ref = new Firebase("https://blazing-torch-6209.firebaseio.com/cars");
    ref.on("value", function(snapshot) {
      snapshot.forEach(function(car) {
        $("#read-content").html("Make: " + car.val().make + " Model:" + car.val().model);
        return true;
      })
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
}