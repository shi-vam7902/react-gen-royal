const PlayList = require("../model/PlayListSchema");
exports.addPlayList = (req, res) => {
  const lists = new PlayList(req.body);
  lists.save((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "Error Saving lists",
      });
    } else {
      res.status(200).json({
        message: "PlayList Created ",
        data: data,
      });
    }
  });
};
exports.removeSongFromPlayList = (req, res) => {
  PlayList.findOneAndUpdate(
    { _id: req.params.id },
    { $pull: { songs: req.body.songid } },
    { new: true },
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "Error removing the song from playList",
        });
      } else {
        res.status(200).json({
          message: "Song removed from the PlayList",
          data: data,
        });
      }
    }
  );
};
exports.AddSongToPlayList = (req, res) => {
  console.log(req.params.id);
  console.log(req.body.songid);
  PlayList.findOneAndUpdate(
    { _id: req.params.id },//playlist
    { $push: { songs: req.body.songid } },//songid
    { new: true },
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "Error addding the song from playList",
        });
      } else {
        res.status(200).json({
          message: "Song added To PlayList",
          data: data,
        });
      }
    }
    );
  };
  