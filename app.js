import { db } from "./firebase-config.js";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

window.tiktokFlow = () => {
  alert("Open TikTok and DM @nexusnetlify to receive your key.");
};

async function activateKey() {
  const key = document.getElementById("keyInput").value;
  const status = document.getElementById("status");

  const q = query(collection(db, "keys"), where("keyCode", "==", key));
  const snap = await getDocs(q);

  if (snap.empty) {
    status.innerText = "❌ Invalid key";
    return;
  }

  const keyDoc = snap.docs[0];
  const data = keyDoc.data();

  if (data.used) {
    status.innerText = "❌ Key already used";
    return;
  }

  await updateDoc(doc(db, "keys", keyDoc.id), {
    used: true,
    activatedBy: "user",
    deviceId: navigator.userAgent
  });

  status.innerText = "✅ Activated";
}

window.activateKey = activateKey;
const KEYS = {
  
  // NORMAL ACCESS ($7)
  "NEXUS-NR1A9K2QX": "normal",
  "NEXUS-NR2B8L7WZ": "normal",
  "NEXUS-NR3C5P9TY": "normal",
  "NEXUS-NR4D1V6KM": "normal",
  "NEXUS-NR5E7X3QJ": "normal",

  // PREMIUM ACCESS ($20)
  "NEXUS-PR1X9K2QZ": "premium",
  "NEXUS-PR2Y8L7WX": "premium",
  "NEXUS-PR3Z5P9TY": "premium",
  "NEXUS-PR4A1V6KM": "premium",
  "NEXUS-PR5B7X3QJ": "premium",

  // LIFETIME ACCESS
  "NEXUS-LT1A9K2QX": "lifetime",
  "NEXUS-LT2B8L7WZ": "lifetime",
  "NEXUS-LT3C5P9TY": "lifetime"
};
