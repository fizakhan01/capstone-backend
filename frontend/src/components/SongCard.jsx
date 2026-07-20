import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PlayerContext } from "../Context/PlayerContext";

function SongCard({ song, addFavorite }) {

  const navigate = useNavigate();


  const {
    setCurrentSong,
    setIsPlaying
  } = useContext(PlayerContext);


  const playSong = () => {
    
    setCurrentSong(song);

    setIsPlaying(true);

    navigate("/");

  };


  return (
    <div className="song-card">

      <img
        src={song.artworkUrl100}
        alt={song.trackName}
      />


      <div className="song-info">

        <h3>
          {song.trackName}
        </h3>

        <p>
          {song.artistName}
        </p>


        <button
          className="play-btn"
          onClick={playSong}
        >
          ▶ Play
        </button>


        <button
          className="favorite-btn"
          onClick={() =>
            addFavorite(song)
          }
        >
          ❤️ Add to Favorites
        </button>


      </div>

    </div>
  );
}

export default SongCard;