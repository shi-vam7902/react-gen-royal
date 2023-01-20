const express = require('express')
const router = express.Router()
const playlistController = require('../controller/PlayListController')
router.post("/list",playlistController.addPlayList)
router.post("/list/:id",playlistController.removeSongFromPlayList)
router.put("/addlist/:id",playlistController.AddSongToPlayList)
module.exports = router