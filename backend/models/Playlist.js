const mongoose =
  require("mongoose");

const playlistSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types
            .ObjectId,
        ref: "User",
      },

      name: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Playlist",
    playlistSchema
  );