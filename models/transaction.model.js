// models/transaction.model.js
module.exports = (sequelize, Sequelize) => {
  const Transaction = sequelize.define('Transaction', {
    transactionDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  });

  return Transaction;
};
