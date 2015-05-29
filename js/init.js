var firebase = new Firebase("https://blazing-torch-6209.firebaseio.com/");

$(document).ready(function() {
    $("#save-button").click(function(e) {
          e.preventDefault();
          setFirebase();
      });
    $("#push-button").click(function(e) {
         e.preventDefault();
         pushFirebase();
     });
    $("#read-button").click(function(e) {
        e.preventDefault();
        readFirebase();
    });
    $("#submit-car").click(function(e) {
        e.preventDefault();
        addCarToFirebase();
    });
});

function setFirebase() {
    console.log("setFirebase");
    firebase.set( {
        make: "Volkswagen",
        model: "up"
    });
}

function pushFirebase() {
    console.log("pushFirebase");
    var pushRef = firebase.child("cars");
    pushRef.push( {
        make: "Volkswagen",
        model: "up"
    });
}

function readFirebase() {
    console.log("readFirebase");
    var ref = new Firebase("https://blazing-torch-6209.firebaseio.com/cars");
    ref.on("child_added", function(snapshot) {
      var content = $("#read-content").text();
      snapshot.forEach(function(car) {
        content = content + "Make: " + car + " Model:" + car;
        return true;
      })
      $("#read-content").html(content);
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
}

function addCarToFirebase() {
    console.log("addCarToFirebase");
    var pushRef = firebase.child("cars");
    var make = $("#car-form-make").val();
    pushRef.push( {
        make: $("#car-form-make").val(),
        model: $("#car-form-model").val()
    });
}