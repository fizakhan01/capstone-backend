import { createContext, useState, useEffect } from "react";
import API from "../services/api";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) return;

      const res = await API.get("/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },

      });


      setFavorites(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
        fetchFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};