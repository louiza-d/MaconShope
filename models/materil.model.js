// models/materil.model.js

module.exports = (sequelize, Sequelize) => {
  
    const Materil = sequelize.define("materil", {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      likesCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }
    });
    return Materil;
  };
  