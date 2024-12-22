const express = require('express');
const cors = require('cors');
const mat= require("./routes/materil.routes")

const app = express();

app.use(cors({ origin: "http://localhost:3000" })); 
app.use(cors());
app.use(express.json()); // Middleware pour parser les JSON

const path = require('path');
app.use('/assets/images', express.static(path.join(__dirname, '../frontend/src/assets/images')));

app.use('/api/materils', mat);
 
app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
