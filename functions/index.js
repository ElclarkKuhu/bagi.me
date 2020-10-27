const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.setupURL = functions.database.ref('/data/{user_id}/url').onCreate((snapshot, context) => {
    const url = snapshot.val();
    console.log('Registering ', url , context.params.pushId);
    return snapshot.ref.parent.parent.parent.child('uids/' + url + '/uid').set(snapshot.ref.parent.key);
  });