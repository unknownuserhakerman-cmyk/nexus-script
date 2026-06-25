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
