const Playlist =
  require("../models/Playlist");

exports.createPlaylist =
  async (req, res) => {
    try {
      const playlist =
        await Playlist.create({
          name: req.body.name,
          user: req.user.id,
        });

      res.json(playlist);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

exports.getPlaylists =
  async (req, res) => {
    const playlists =
      await Playlist.find({
        user: req.user.id,
      });

    res.json(playlists);
  };

exports.deletePlaylist =
  async (req, res) => {
    await Playlist.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Playlist Deleted",
    });
  };