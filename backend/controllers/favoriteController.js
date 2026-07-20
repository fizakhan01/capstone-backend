const Favorite = require("../models/Favorite");

// Get Favorites
exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({
      user: req.user.id,
    });

    res.json(favorites);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Add Favorite
exports.addFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.create({
      user: req.user.id,
      trackId: req.body.trackId,
      trackName: req.body.trackName,
      artistName: req.body.artistName,
      artworkUrl100: req.body.artworkUrl100,
    });

    res.json(favorite);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Favorite using trackId
exports.deleteFavorite = async (req, res) => {
  try {
    await Favorite.findOneAndDelete({
      user: req.user.id,
      trackId: req.params.id,
    });

    res.json({
      message: "Favorite Removed",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};