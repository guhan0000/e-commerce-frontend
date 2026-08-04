import React from "react";
import { useContext } from "react";
import { FavContext } from "../context/FavContext";

const Favourites = () => {
  const { favourites } = useContext(FavContext);
  return (
    <div>
      {favourites.length === 0 && <h1>WishList is Empty</h1>}
      {favourites?.map((product) => (
        <h3 key={product.id}>{product.title}</h3>
      ))}
    </div>
  );
};

export default Favourites;
