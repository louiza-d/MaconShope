const db = require("./models");

const seedData = async () => {
  await db.sequelize.sync({ force: false }); // Ne pas écraser les tables si elles existent

  // Insérer des données de test
  const materils = [
    { name: "Marteau de Maçon", description: "Outil pour la construction", price: 15.0 },
    { name: "Truelle", description: "Outil pour étaler le mortier", price: 10.0 },
  ];

  const users = [
    { login: "user1", password: "password123", fullName: "John Doe" },
    { login: "user2", password: "password456", fullName: "Jane Smith" },
  ];
/** 
  const UserLikes = [
    {createdAt: "01/12/2015", updatedAt: "01/12/2015", materialId: "4", userId: "1"},
  ]; 
  */

  for (let materil of materils) {
    await db.materiels.create(materil);
  }

  for (let user of users) {
    await db.users.create(user);
  }


  console.log("Data inserted successfully!");
};

seedData();
