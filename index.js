/*
   ✦ ✦ ✦   M K 👑 - M I N I   ✦ ✦ ✦

─────────────────────────────────────────────────────────────
📛 Project   : MK👑-MiNi
👤 Creator   : mursalin 
🌐 GitHub    : https://github.com/mursalin3352
📱 Contact   : https://t.me/@bandaheali
📢 Channel   : https://whatsapp.com/channel/0029VbE0W8S3LdQLu8591G2j
🗓 Release   : 12 • Aprail • 2026 | 12:00 PM
─────────────────────────────────────────────────────────────
 
//   ⭐ PROUDLY MADE IN PAKISTAN ⭐
*/

// Bnao Dost Aur Dushman Ko Dhnwan Tb Hoja Asli Ke Pehchan
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const cdn = "https://bandaheali-cdn.koyeb.app";

const LOCAL_FILE = path.join(__dirname, "cdn-smd-mini.js");

(async () => {
  try {
    const url = `https://bandaheali-cdn.koyeb.app/bandaheali/smd-mini.js`;
    
    const { data } = await axios.get(url, {
      timeout: 15000
    });

    if (!data) throw new Error("Empty script received");
    fs.writeFileSync(LOCAL_FILE, data);
    if (require.cache[require.resolve(LOCAL_FILE)]) {
      delete require.cache[require.resolve(LOCAL_FILE)];
    }

    require(LOCAL_FILE);

  } catch (err) {
    console.error("❌ CDN Loader Error:", err.message);
    if (fs.existsSync(LOCAL_FILE)) {
      
      require(LOCAL_FILE);
    }
  }
})();
