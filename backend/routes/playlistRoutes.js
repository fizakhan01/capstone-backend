const router =
  require("express").Router();

const auth =
  require(
    "../middleware/authMiddleware"
  );

const {
  createPlaylist,
  getPlaylists,
  deletePlaylist,
} = require(
  "../controllers/playlistController"
);

router.get(
  "/",
  auth,
  getPlaylists
);

router.post(
  "/",
  auth,
  createPlaylist
);

router.delete(
  "/:id",
  auth,
  deletePlaylist
);

module.exports = router;