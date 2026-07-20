import {
  useEffect,
  useState,
} from "react";
import API from "../services/api";

function Playlist() {
  const [playlists, setPlaylists] =
    useState([]);

  const [
    playlistName,
    setPlaylistName,
  ] = useState("");

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchPlaylists =
    async () => {
      try {
        const res =
          await API.get(
            "/playlists",
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem(
                  "token"
                )}`,
              },
            }
          );

        setPlaylists(
          res.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  const createPlaylist =
    async () => {
      try {
        if (
          !playlistName.trim()
        ) {
          return alert(
            "Enter playlist name"
          );
        }

        await API.post(
          "/playlists",
          {
            name:playlistName,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "token"
              )}`,
            },
          }
        );

        setPlaylistName("");

        fetchPlaylists();
      } catch (error) {
        console.log(error);
        alert(
          "Playlist not created"
        );
      }
    };

  const deletePlaylist =
    async (id) => {
      try {
        await API.delete(
          `/playlists/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "token"
              )}`,
            },
          }
        );

        fetchPlaylists();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="playlist-page">
      <h1>
        My Playlists 🎵
      </h1>

      <div className="playlist-input">
        <input
          type="text"
          placeholder="Playlist Name"
          value={
            playlistName
          }
          onChange={(e) =>
            setPlaylistName(
              e.target.value
            )
          }
        />

        <button
          onClick={
            createPlaylist
          }
        >
          Create Playlist
        </button>
      </div>

      <div className="playlist-list">
        {playlists.length ===
        0 ? (
          <p>
            No playlists yet.
          </p>
        ) : (
          playlists.map(
            (playlist) => (
              <div
                className="playlist-card"
                key={
                  playlist._id
                }
              >
                <h3>
                  {
                    playlist.name
                  }
                </h3>

                <button
                  className="remove-btn"
                  onClick={() =>
                    deletePlaylist(
                      playlist._id
                    )
                  }
                >
                  Delete
                </button>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}

export default Playlist;