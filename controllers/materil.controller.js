const db = require("../models");
const Materil = db.materiels;
const User = db.users;

// Récupérer tous les matériels
exports.findAll = async (req, res) => {
  try {
    const materils = await Materil.findAll({
      
    }); // Récupérer tous les matériaux
    res.status(200).json(materils); // Retourner les données sous forme JSON
  } catch (err) {
    console.error("Error fetching materials:", err); // Log l'erreur pour debug
    res.status(500).json({ message: "Une erreur est survenue lors de la récupération des matériaux." });
  }
};



// Ajouter ou retirer un like
exports.toggleLike = async(req, res) => {
  const materilId = req.params.materilId;
  const userId = req.body.userId;

  try {
    // Chercher le matériau dans la base de données
    const materil = await Materil.findByPk(materilId);
    if (!materil) {
      return res.status(404).send({ message: "Materil not found!" });
    }

    // Chercher l'utilisateur dans la base de données
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found!" });
    }

    // Vérifier si l'utilisateur a déjà liké ce matériau en utilisant l'alias 'likedBy'
    const hasLiked = await materil.hasLikedBy(user); // Utilisation de l'alias 'likedBy'
    if (hasLiked) {
      // Si déjà liké, on retire le like
      await materil.removeLikedBy(user); // Utilisation de l'alias 'likedBy'
      await materil.update({ likesCount: materil.likesCount - 1 });
      return res.status(200).json({ materilId, isLiked: false });
    } else {
      // Si non liké, on ajoute le like
      await materil.addLikedBy(user); // Utilisation de l'alias 'likedBy'
      await materil.update({ likesCount: materil.likesCount + 1 });
      return res.status(200).json({ materilId, isLiked: true });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Error processing the like action" });
  }
};

// Récupérer les utilisateurs qui ont liké un matériel
exports.getLikedUsers = async (req, res) => {
  const materilId = req.params.materilId;

  try {
    const materil = await Materil.findByPk(materilId, {
      include: [
        {
          model: User,
          as: 'likedBy',
          attributes: ['id', 'fullName', 'login'],
        },
      ],
    });

    if (!materil) {
      return res.status(404).json({ message: "Materiel non trouvé" });
    }

    res.status(200).json(materil.likedBy); // Retourner la liste des utilisateurs
  } catch (err) {
    console.error("Erreur lors de la récupération des likes:", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
