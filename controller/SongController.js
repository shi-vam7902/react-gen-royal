const SongSchema = require('../model/SongSchema')
exports.addSong = (req,res)=>{
    const Songs = new SongSchema(req.body)
    Songs.save((err,data)=>{
        if(err)
        {
            console.log(err);
            res.status(500).json({
                message:"Error Saving song",
            })
        }
        else
        {
            res.status(200).json({
                message:"Song Saved",
                data:data
            })
        }
    })
}
