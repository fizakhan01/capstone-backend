import { useContext } from "react";
import { FavoriteContext } from "../Context/FavoriteContext";
import API from "../services/api";

function Favorites() {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const removeFavorite = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/favorites/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFavorites((prev) =>
        prev.filter((song) => song.trackId !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Favorite Songs 😍</h1>

      {favorites.length === 0 ? (
        <p>No favorite songs yet.</p>
      ) : (
        favorites.map((song) => (
          <div className="favorite-item" key={song.trackId}>
            <h3>{song.trackName}</h3>
            <p>{song.artistName}</p>

            <button
              className="remove-btn"
              onClick={() =>
                removeFavorite(song.trackId)
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Favorites;