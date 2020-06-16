const Pool = require("pg").Pool;

const pool = new Pool({
  user: "", // specify your username
  password: "",
  host: "localhost",
  port: 5432,
  database: "perntodo" // specify your database
});

module.exports = pool;