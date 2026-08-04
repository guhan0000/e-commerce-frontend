import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FavContext = createContext();
export const FavProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();
  const addFavourites = (product) => {
    setFavourites((prev) => [...prev, product]);
  };
  const removeFavourites = (id) => {
    setFavourites((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };
  const isFavourite = (id) => {
    return favourites.some((item) => id === item.id);
  };
  const toggleFavourites = (product) => {
    const exists = favourites.some((item) => item.id === product.id);
    if (exists) {
      return removeFavourites(product.id);
    } else {
      addFavourites(product);
    }
  };
  const clearFavourites = () => {
    setFavourites([]);
  };
  return (
    <FavContext.Provider
      value={{
        favourites,
        addFavourites,
        removeFavourites,
        isFavourite,
        toggleFavourites,
        clearFavourites,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};
