// Public Firebase web configuration (not an admin credential). See README.
export const firebaseConfig = {
  apiKey: "AIzaSyBlCyEOMUgSYmkZFpchapkcMe0BPrFc6mU",
  authDomain: "cyber-escape-dgssi.firebaseapp.com",
  databaseURL: "https://cyber-escape-dgssi-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cyber-escape-dgssi",
  storageBucket: "cyber-escape-dgssi.firebasestorage.app",
  messagingSenderId: "470592430883",
  appId: "1:470592430883:web:ae5a3f8a862f2afdfe6296",
  measurementId: "G-BD1BPM0FK6"
};
export const firebaseReady = Boolean(firebaseConfig.apiKey && firebaseConfig.databaseURL && firebaseConfig.projectId && firebaseConfig.appId);

