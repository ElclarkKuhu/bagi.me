document.addEventListener('DOMContentLoaded', function() {
    firebase.auth().useDeviceLanguage();

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL || 'https://elclark.my.id/assets/img/elclark-square.png';
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

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
        }
    });
}

function updateData(photoURL, uid) {
    // TODO
    /*firebase.database().ref('data/' + uid).updateCh({
        photoURL : photoURL
    });*/
}

function keluar() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location.replace('/login')
      }).catch(function(error) {
        // An error happened.
      });
}