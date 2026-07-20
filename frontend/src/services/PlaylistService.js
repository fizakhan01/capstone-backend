import API from "./api";

export const getPlaylists = () => {
  return API.get("/playlists");
};

export const createPlaylist = (
  playlistName
) => {
  return API.post("/playlists", {
    playlistName,
  });
};

export const deletePlaylist = (id) => {
  return API.delete(
    `/playlists/${id}`
  );
};