import { useContext } from "react";
import { PlayerContext } from "../Context/PlayerContext";

function NowPlaying() {

  const {
    currentSong,
    isPlaying,
    setIsPlaying
  } = useContext(PlayerContext);


  if (!currentSong) {
    return (
      <h2>
        No song selected
      </h2>
    );
  }


  return (
    <div className="now-playing">

      <img
        src={currentSong.artworkUrl100}
        alt={currentSong.trackName}
      />


      <h1>
        {currentSong.trackName}
      </h1>


      <h3>
        {currentSong.artistName}
      </h3>


      <button
        className="big-play"
        onClick={() =>
          setIsPlaying(!isPlaying)
        }
      >
        {
          isPlaying
          ? "⏸Pause"
          : "▶Play"
        }
      </button>


      <input
        type="range"
        className="progress"
      />


      <input
        type="range"
        className="volume-large"
      />

    </div>
  );
}


export default NowPlaying;