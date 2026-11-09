const textFile = './picnames.txt';
const psFile = './ps.txt';
const firebaseConfig = {

  apiKey: "AIzaSyAnDQGSNjFVhBhqG7i0POJIvSWVhufs3eM",

  authDomain: "rem-e3-replicate.firebaseapp.com",

  projectId: "rem-e3-replicate",

  storageBucket: "rem-e3-replicate.firebasestorage.app",

  messagingSenderId: "431774377134",

  appId: "1:431774377134:web:076fad87e2a6073e12b93f",

  measurementId: "G-QZ4PK95MFZ"

};


let picnames = [];
let oldids = [];

async function preloadExperimentFiles() {
  const [picText, psText] = await Promise.all([
    fetch(textFile).then(r => r.text()),
    fetch(psFile).then(r => r.text())
  ]);

  picnames = picText.replace(/\r/g, '').split('\n').slice(0, 2362 - 1);
  oldids = psText.replace(/\r/g, '').split('\n');

  console.log("Loaded picnames:", picnames);
  console.log("Loaded old IDs:", oldids);
}