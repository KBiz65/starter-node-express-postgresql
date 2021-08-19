const env = process.env.NODE_END || "development";
const config = require("../../knexfile")[env];
const knex = require("knex")(config);

module.exports = knex;
