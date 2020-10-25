document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash.substring(1);

    if (hash == "") {
        window.location.replace("/dashboard")
    } else {
        getData(hash)
    }

});

function getData(hash) {
    return firebase.database().ref('data/' + hash).once('value', snapshot => {
        if (snapshot.hasChild("username") && snapshot.hasChild("pesan") && snapshot.hasChild("photoURL")) {
            document.getElementById("pp").src = snapshot.val().photoURL;
            document.getElementById("nama").innerHTML = snapshot.val().username;
            document.getElementById("pesan").innerHTML = snapshot.val().pesan;
        } else {
            window.location.replace('404.html')
        }
    });
}