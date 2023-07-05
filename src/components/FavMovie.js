import React from "react";
import { removeFromFavorites } from "../actions/favoritesAction";
import { useDispatch, useSelector } from "react-redux";

const FavMovie = ({ title, id }) => {
 const favorites = useSelector((store) => store.favMovies);
 const dispatch = useDispatch();

 const handleRemoveFavorite = (id) => {
  dispatch(removeFromFavorites(id))
 }
 

  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{title}</div>
      <button onClick={() => handleRemoveFavorite(id)} className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100">
        Çıkar
      </button>
    </div>
  );
}

export default FavMovie