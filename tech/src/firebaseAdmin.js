const admin = require("firebase-admin");
const serviceAccount = require(process.env.FIREBASE_ADMIN_SDK_CREDENTIALS_PATH);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
