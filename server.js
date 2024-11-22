const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

const path = require('path');
app.use('/assets/images', express.static(path.join(__dirname, '../frontend/src/assets/images')));

let materils = [
    {
        id: 1,
        image: '/assets/images/img2.jpg',
        title: 'Marteau de Maçon',
        description: 'Un outil essentiel pour les travaux de démolition et de construction.',
        prix: 'À partir de 15€',
        link: 'lien/vers/lapagedetails',
        liked: false
    },
    {
        id: 2,
        image: '/assets/images/img1.jpg',
        title: 'Truelle Professionnelle',
        description: 'Idéale pour étaler et lisser le mortier avec précision.',
        prix: 'À partir de 10€',
        link: 'lien/vers/lapagedetails',
        liked: false
    },
    {
        id: 3,
        image: '/assets/images/img4.jpg',
        title: 'Niveau à Bulles',
        description: 'Indispensable pour vérifier les alignements avec exactitude.',
        prix: 'À partir de 20€',
        link: 'lien/vers/lapagedetails',
        liked: false
    },
    {
        id: 4,
        image: '/assets/images/img5.jpg',
        title: 'Bétonnière Portable',
        description: 'Facilite le mélange du béton pour de grands travaux de construction.',
        prix: 'À partir de 200€',
        link: 'lien/vers/lapagedetails',
        liked: false
    },
];

// Route pour récupérer les matériaux
app.get('/api/materils', (req, res) => {
  res.json(materils);
});

// Route pour gérer les likes
app.post('/api/like', (req, res) => {
  const { id } = req.query;
  materils = materils.map(materil => {
    if (materil.id === parseInt(id)) {
      materil.liked = !materil.liked;
    }
    return materil;
  });
  res.status(200).send({ success: true });
});

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
