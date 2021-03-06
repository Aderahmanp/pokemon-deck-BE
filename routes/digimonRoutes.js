const express = require("express");
const router = express.Router();
const digimonController = require("../controllers/digimonController");


router.post("/digimon", digimonController.createDigimon);

router.get("/", digimonController.digimon);

router.delete("/digimon/:id", digimonController.delete);

module.exports = router;