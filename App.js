const express = require("express")
const path = require('path')
const app = express();
app.use(express.static('Views'))
app.use(express.static(path.join(__dirname, 'outils')))
app.get("/", (req, res) => {
 res.sendFile(path.join(__dirname, '/Views/index.html'))
});
app.listen(5000, () => {
 console.log('Listening on port ' + 5000)});