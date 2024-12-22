// config/db.config.js
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "materiels_db",
    dialect: "sqlite",
    storage: "./database.sqlite", // Emplacement de la base de données SQLite
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  