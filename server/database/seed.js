import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
  CREATE TABLE messages (
    name TEXT,
    message TEXT
  )
`);

db.prepare(`INSERT INTO messages (name, message) VALUES (?, ?)`).run(
    "Spangebab",
    "Kill me please"
  );
  