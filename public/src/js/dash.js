document.addEventListener('DOMContentLoaded', function() {
    firebase.auth().useDeviceLanguage();
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            console.log(displayName,email,emailVerified,photoURL,isAnonymous,providerData)
        } else {
            // user not singed in
            window.location.replace("/login");
        }
    });
});