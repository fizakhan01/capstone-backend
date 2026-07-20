const router =
  require("express").Router();

const auth =
  require(
    "../middleware/authMiddleware"
  );

const {
  getFavorites,
  addFavorite,
  deleteFavorite,
} = require(
  "../controllers/favoriteController"
);

router.get(
  "/",
  auth,
  getFavorites
);

router.post(
  "/",
  auth,
  addFavorite
);

router.delete(
  "/:id",
  auth,
  deleteFavorite
);

module.exports = router;