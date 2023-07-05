import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/favoritesAction"

    const initialState = {
        favMovies: []
    }
  
    const moviefavorites = (state = initialState, action) => {
        switch (action.type) {
          case ADD_TO_FAVORITES:
            if (state.favMovies.find(movie => movie.id === action.payload.id)) {
                return state;
              } else {
                return {
                  ...state,
                  favMovies: [...state.favMovies, action.payload]
                };
              }
      
          case REMOVE_FROM_FAVORITES:
            return {
              ...state,
              favMovies: state.favMovies.filter(movie => movie.id !== action.payload)
            };
          default:
            return state;
        }
      };

  export default moviefavorites