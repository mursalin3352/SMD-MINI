const smd = require("team-mking");
const db = smd.db;

async function connectDb() {
  try {
    await db.connect();
    console.log("mking-mini db connected");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

module.exports = connectDb;
