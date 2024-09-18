const admin = require("firebase-admin");
const serviceAccount = require("C:/Users/Michele/Downloads/commercetechback-firebase-adminsdk-by35b-3da5bf3da1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
