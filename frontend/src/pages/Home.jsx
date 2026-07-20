import { Link } from "react-router-dom";
import { useContext } from "react";
import { PlayerContext } from "../Context/PlayerContext";

function Home() {

  const {
    currentSong,
    isPlaying,
    setIsPlaying,
  } = useContext(PlayerContext);

  return (
    <div className="home-page">

      <div className="home-top">

        <h1 className="app-title">
          Mood Music Finder 
        </h1>

        <div className="home-btns">
          <Link to="/moods">
            <button>Select Mood</button>
          </Link>

          <Link to="/favorites">
            <button>Favorites ❤️</button>
          </Link>
        </div>

      </div>

      
      {currentSong ? (

        <div className="now-card">

          <img
            src={currentSong.artworkUrl100.replace(
              "100x100",
              "600x600"
            )}
            alt={currentSong.trackName}
          />

          <h2>{currentSong.trackName}</h2>

          <p>{currentSong.artistName}</p>

          {/* <button
            className="play-main"
            onClick={() =>
              setIsPlaying(!isPlaying)
            }
          >
            {isPlaying ? "⏸ Pause" : "▶ Play"}
          </button> */}

          <audio
            src={currentSong.previewUrl}
            controls
            autoPlay
          />

        </div>

      ) : (

        <div className="empty-player">

          <h2> No Song Playing</h2>

          <p>
            Select a mood and press Play to start listening.
          </p>

        </div>

      )}

    </div>
  );
}

export default Home;