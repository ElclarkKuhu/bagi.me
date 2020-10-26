const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.setupURL = functions.database.ref('/data/{user_id}/url')
    .onCreate((snapshot, context) => {
      // Grab the current value of what was written to the Realtime Database.
      const url = snapshot.val();
      console.log('Registering ', url , context.params.pushId);
      return snapshot.ref.parent.parent.pare.child('uids/' + url + '/uid').set(snapshot.ref.parent.key);
    });
