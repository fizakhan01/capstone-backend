const mongoose = require("mongoose");

const favoriteSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types
            .ObjectId,
        ref: "User",
        required: true,
      },

      trackId: {
        type: Number,
        required: true,
      },

      trackName: {
        type: String,
        required: true,
      },

      artistName: {
        type: String,
      },

      artworkUrl100: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Favorite",
    favoriteSchema
  );