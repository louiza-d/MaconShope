// models/user.model.js
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
    return User;
  };
  