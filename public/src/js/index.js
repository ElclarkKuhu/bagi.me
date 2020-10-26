document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash.substring(1);

    if (hash == "") {
        window.location.replace("/dashboard")
    } else {
        getUID(hash)
    }

});

function getUID(hash) {
    firebase.database().ref('uids/' + hash).once('value', snapshot => {
        if (snapshot.hasChild("uid")) {
            getData(snapshot.val().uid)
        } else {
            window.location.replace('404.html')
        }
    });
}

function getData(uid) {
    firebase.database().ref('data/' + uid).once('value', snapshot => {
        if (snapshot.hasChild("username") && snapshot.hasChild("photoURL")) {
            document.getElementById("photoURL").src = snapshot.val().photoURL;
            document.getElementById("nama").innerHTML = snapshot.val().username;
            //document.getElementById("pesan").innerHTML = snapshot.val().pesan;
        } else {
            window.location.replace('404.html')
        }
    });
}