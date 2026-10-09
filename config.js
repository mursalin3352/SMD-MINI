const fs = require('fs');
const dotenv = require('dotenv');

if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' });
}

module.exports = {

  // =====================
  // DATABASE
  // =====================
  DATABASE_URL:
    process.env.MONGODB_URI ||
    process.env.DATABASE_URL ||
    "",

  // =====================
  // BOT CORE SETTINGS
  // =====================
  OWNER_NUMBER:
    process.env.OWNER_NUMBER ||
    "923929240360",

  PREFIX: process.env.PREFIX || ".",

  // =====================
  // GLOBAL BRANDING
  // =====================
  BOT_NAME:
    process.env.BOT_NAME ||
    "MURSALIN KING",

  OWNER_NAME:
    process.env.OWNER_NAME ||
    "MURSALIN",

  CAPTION:
    process.env.CAPTION ||
    "POWERED BY MURSALIN KING",

  STATUS_MSG:
    process.env.STATUS_MSG ||
    "Hello From Mursalin King",

  NEWSLETTER_JID:
    process.env.NEWSLETTER_JID ||
    "12036317575282051@newsletter",

  MENU_IMG:
    process.env.MENU_IMG ||
    "https://bandaheali-cdn.koyeb.app/bandaheali/smd.jpg",

  // =====================
  // SITE URL FOR PAIR CMD
  // =====================
  SITE_URL:
    process.env.SITE_URL ||
    "https://mr-shaban.vercel.app",

  PORT:
    process.env.PORT ||
    "21604"
};
