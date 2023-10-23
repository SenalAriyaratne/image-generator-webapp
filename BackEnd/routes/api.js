const express = require('express');
const { createImage } = require('../controllers/imageController');

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello from express")
})

router.post("/createimage", createImage);

module.exports = router;