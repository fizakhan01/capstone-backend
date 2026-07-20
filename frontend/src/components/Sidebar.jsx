import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Sidebar() {
  const { theme, toggleTheme } =
    useContext(ThemeContext);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className={`sidebar ${theme}`}>
      <h2 className="logo">
        MoodTunes
      </h2>

      <Link to="/">🏠 Home</Link>

      <Link to="/moods">
        😊 Moods
      </Link>

      <Link to="/songs">
        🎵 Songs
      </Link>

      <Link to="/favorites">
        ❤️ Favorites
      </Link>

      <Link to="/playlist">
        📁 Playlists
      </Link>

      {!localStorage.getItem("token") && (
        <>
          <Link to="/login">
            🔐 Login
          </Link>

          <Link to="/signup">
            📝 Signup
          </Link>
        </>
      )}

      {localStorage.getItem("token") && (
        <button
          className="logout-btn"
          onClick={logout}
        >
          🚪 Logout
        </button>
      )}

      <button
        className="theme-btn"
        onClick={toggleTheme}
      >
        {theme === "dark"
          ? "☀️ Light"
          : "🌙 Dark"}
      </button>
    </div>
  );
}

export default Sidebar;