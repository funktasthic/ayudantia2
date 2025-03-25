require('dotenv').config();

module.exports = {
    "development": {
      "database": process.env.DB_NAME,
      "storage": `./database/${process.env.DB_NAME}`,
      "dialect": "sqlite"
    },
    "test": {
      "database": "./database/database_test.sqlite",
      "dialect": "sqlite"
    },
    "production": {
      "database": "./database/database_production.sqlite",
      "dialect": "sqlite"
    }
  }