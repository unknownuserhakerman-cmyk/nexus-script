const KEYS = {
  "NEXUS-NR1A9K2QX": "normal",
  "NEXUS-PR1X9K2QZ": "premium",
  "NEXUS-LT1A9K2QX": "lifetime"
};

let unlocked = false;

function activateKey() {
  const key = document.getElementById("keyInput").value;
  const status = document.getElementById("status");

  if (!KEYS[key]) {
    status.innerText = "❌ Invalid Key";
    return;
  }

  unlocked = true;
  status.innerText = "✅ Access Granted: " + KEYS[key];
}

const SCRIPTS = {
  "blox fruits": "SCRIPT: auto farm enabled",
  "adopt me": "SCRIPT: auto collect enabled",
  "arsenal": "SCRIPT: aim assist enabled"
};

function searchScript() {
  if (!unlocked) {
    document.getElementById("result").innerText = "Activate key first";
    return;
  }

  const game = document.getElementById("gameInput").value.toLowerCase();

  document.getElementById("result").innerText =
    SCRIPTS[game] || "No script found";
}
