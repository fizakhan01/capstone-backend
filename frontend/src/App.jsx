import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Moods from "./pages/Moods";
import Songs from "./pages/Songs";
import Favorites from "./pages/Favorites";
import Playlist from "./pages/Playlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NowPlaying from "./pages/NowPlaying";

import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

import { MoodProvider } from "./Context/MoodContext";
import { FavoriteProvider } from "./Context/FavoriteContext";
import { PlayerProvider } from "./Context/PlayerContext";
import ThemeProvider from "./Context/ThemeContext";


function App() {

  const isLoggedIn = localStorage.getItem("token");

  return (
    <ThemeProvider>

      <MoodProvider>

        <FavoriteProvider>

          <PlayerProvider>

            <BrowserRouter>

              <div className="app">

                {isLoggedIn && (
                  <Sidebar />
                )}


                <div
                  className={
                    isLoggedIn
                      ? "main-content"
                      : "auth-content"
                  }
                >

                  <Routes>

                    <Route
                      path="/"
                      element={
                        <ProtectedRoute>
                          <Home />
                        </ProtectedRoute>
                      }
                    />


                    <Route
                      path="/moods"
                      element={
                        <ProtectedRoute>
                          <Moods />
                        </ProtectedRoute>
                      }
                    />


                    <Route
                      path="/songs"
                      element={
                        <ProtectedRoute>
                          <Songs />
                        </ProtectedRoute>
                      }
                    />


                    <Route
                      path="/favorites"
                      element={
                        <ProtectedRoute>
                          <Favorites />
                        </ProtectedRoute>
                      }
                    />


                    <Route
                      path="/playlist"
                      element={
                        <ProtectedRoute>
                          <Playlist />
                        </ProtectedRoute>
                      }
                    />


                    <Route
                      path="/NowPlaying"
                      element={
                        <ProtectedRoute>
                          <NowPlaying />
                        </ProtectedRoute>
                      }
                    />


                    <Route
                      path="/login"
                      element={<Login />}
                    />


                    <Route
                      path="/signup"
                      element={<Signup />}
                    />


                    <Route
                      path="*"
                      element={
                        <Navigate to="/login" />
                      }
                    />

                  </Routes>

                </div>

              </div>


            </BrowserRouter>


            <ToastContainer
              position="top-center"
              autoClose={2000}
              theme="dark"
            />


          </PlayerProvider>

        </FavoriteProvider>

      </MoodProvider>

    </ThemeProvider>
  );
}


export default App;