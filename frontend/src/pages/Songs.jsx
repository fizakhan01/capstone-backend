import { useContext, useEffect, useState } from "react";
import { MoodContext } from "../Context/MoodContext";
import { FavoriteContext } from "../Context/FavoriteContext";
import SongCard from "../components/SongCard";
import { toast } from "react-toastify";
import API from "../services/api";

function Songs() {
  const { Mood } = useContext(MoodContext);

  const { favorites, setFavorites } =
    useContext(FavoriteContext);

  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const addFavorite = async (song) => {
    
    
    const exists = favorites.some(
      
      (item) => item.trackId === song.trackId
    );
   

    if (exists) {
      toast.info("Song is already in Favorites 💖");
      return;
    }

    try {
      console.log("Sending request...");
      const res = await API.post(
      
        "/favorites",
        {
          trackId: song.trackId,
          trackName: song.trackName,
          artistName: song.artistName,
          artworkUrl100: song.artworkUrl100,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "token"
            )}`,
          },
        }
      );

      setFavorites((prev) => [
        ...prev,
        res.data,
      ]);

      toast.success(
        "Added to Favorites ❤️"
      );
    } catch (error) {
      console.log(error);
      toast.error(
        "Failed to add favorite"
      );
    }
  };

  useEffect(() => {
    const query =
      Mood === "happy"
        ? "happy songs"
        : Mood === "sad"
        ? "sad songs"
        : "romantic songs";

    fetch(
      `https://itunes.apple.com/search?term=${query}&entity=song&limit=20`
    )
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [Mood]);

  if (loading) {
    return <h2>Loading Songs...</h2>;
  }

  return (
    <div>
      <h1>{Mood} Songs 🎵</h1>

      <div className="song-grid">
        {songs.map((song) => (
          <SongCard
            key={song.trackId}
            song={song}
            addFavorite={addFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Songs;