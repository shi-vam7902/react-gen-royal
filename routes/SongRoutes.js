const express = require('express')
const router = express.Router()
const SongController = require("../controller/SongController")
router.post("/song",SongController.addSong)
module.exports = router
