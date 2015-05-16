var firebase = new Firebase("https://blazing-torch-6209.firebaseio.com/");

$(document).ready(function() {
    $("#save-button").click(setFirebase());
    $("#push-button").click(pushFirebase());
});

function setFirebase() {
    firebase.set( {
        connectivityTest: "true!"
    });
}

function pushFirebase() {
    var pushRef = firebase.child("cars");
    pushRef.push( {
        make: "Volkswagen",
        model: "ups"
    });
}