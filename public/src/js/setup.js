var displayName;
var email;
var emailVerified;
var photoURL;
var isAnonymous;
var uid;
var providerData;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("urlname").innerHTML = window.location.origin + '/'

    firebase.auth().useDeviceLanguage();

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            displayName = user.displayName;
            email = user.email;
            emailVerified = user.emailVerified;
            photoURL = user.photoURL || 'https://elclark.my.id/assets/img/elclark-square.png';
            isAnonymous = user.isAnonymous;
            uid = user.uid;
            providerData = user.providerData;
        } else {
            // user not singed in
            window.location.replace("/login")
        }
    });
});

function fixURL() {
    document.getElementById("url").value = document.getElementById("url").value.replace(/\s+|[,\/&#%]/g, "");
}

function setup() {
    var username = document.getElementById("username").value;
    var url = document.getElementById("url").value;
    if (username != "" && url != "") {
        firebase.database().ref('uids/').once('value').then(function(snapshot) {
            if (snapshot.hasChild(url)) {
                console.log('url telah dimiliki')
            } else {
                firebase.database().ref('data/' + uid).set({
                    username : username, 
                    photoURL : photoURL,
                    url : url
                }, function(error) {
                    if (error) {
                        console.log("gagal tulis data")
                    } else {
                        window.location.replace('/dashboard')
                    }
                });   
            }
        })
    } else {
        console.log("harus di isi")
    }
} 