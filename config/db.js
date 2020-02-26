const { createConnection } = require('mysql2')
const dotenv = require('dotenv').config()

const connection = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.PASSWORD,
  database: 'employees_db'
})

module.exports = connection