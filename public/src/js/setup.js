document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("urlname").innerHTML = window.location.origin + '/#'

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
        } else {
            // user not singed in
            window.location.replace("/login")
        }
    });
});