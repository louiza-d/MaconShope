console.log("materil.routes.js chargé");
const express =require("express");
const { findAll, toggleLike, getLikedUsers } = require("../controllers/materil.controller");

const router = express.Router();

router.post('/like/:materilId', toggleLike);   // POST /api/materils/like
router.get("/", findAll);  // GET /api/materils
router.get('/:materilId/likedUsers', getLikedUsers);


console.log(router.stack.map(r => r.route?.path).filter(Boolean));

module.exports = router;

