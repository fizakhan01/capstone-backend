import { useContext } from "react";
import { FavoriteContext } from "../Context/FavoriteContext";

function Favorites() {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const removeFavorite = (id) => {
    setFavorites((prev) =>
      prev.filter((song) => song.trackId !== id)
    );
  };

  return (
    <div>
      <h1>Favorite Songs 😍</h1>

      {favorites.map((song) => (
        <div className="favorite-item" key={song.trackId}>
          <h3>{song.trackName}</h3>
          

          <button
            className="remove-btn"
            onClick={() => removeFavorite(song.trackId)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;