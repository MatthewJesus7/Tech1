const admin = require("firebase-admin");
const serviceAccount = require("./commercetechback-firebase-adminsdk-by35b-29fdd60024.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
