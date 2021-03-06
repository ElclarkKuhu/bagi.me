document.addEventListener('DOMContentLoaded', function() {
    firebase.auth().useDeviceLanguage();

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL || '/src/img/bagi.svg';
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            document.getElementById("nama").innerHTML = displayName;
            document.getElementById("photoURL").src = photoURL;

            checkData(uid)
        } else {
            // user not singed in
            window.location.replace("/login")
        }
    });
});

function checkData(uid) {
    firebase.database().ref('data/' + uid).once('value', snapshot => {
        if (!snapshot.hasChild('url')) {
            window.location.replace('/setup')
        } else {
            document.getElementById("link").innerHTML = window.location.origin + '/#' + snapshot.val().url;
            getDonasi(uid)
        }
    });
}

function getDonasi(uid) {
    firebase.database().ref('data/' + uid + '/donasi/nominal').once('value', snapshot => {
        document.getElementById("donasi").innerHTML = 'Rp ' + numberWithCommas(snapshot.val());
    });
}

function keluar() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location.replace('/login')
      }).catch(function(error) {
        // An error happened.
      });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}