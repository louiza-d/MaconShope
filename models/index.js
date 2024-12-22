// models/index.js
const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config.js");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  storage: dbConfig.storage,
  pool: dbConfig.pool,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importation des modèles
db.materiels = require("./materil.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.transaction = require("./transaction.model.js")(sequelize, Sequelize);

// Définir les relations
db.materiels.belongsToMany(db.users, {
    through: 'UserLikes',
    as: 'likedBy',
    foreignKey: 'materialId' });

db.users.belongsToMany(db.materiels, {  
    through: 'UserLikes',
    as: 'likedMaterials',
    foreignKey: 'userId' }); 

 // Relation Many-to-Many avec Material
 db.transaction.belongsToMany(db.materiels, {
  through: 'TransactionMaterials',
  foreignKey: 'transactionId'
});

// Relation Many-to-One avec User
db.transaction.belongsTo(db.users , {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = db;
