import { useState } from "react";
import { Switch, Route, NavLink, useParams, useHistory } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { addToFavorites } from "./actions/favoritesAction";
import { useDispatch, useSelector } from "react-redux";
import { movies } from "./movies";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const [sira, setSira] = useState(0);
  const favMovies = useSelector((store) => store.favMovies);

  const { id } = useParams();
  const { push } = useHistory();
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    const movie = movies[sira];
    push("/listem");
    dispatch(addToFavorites(movie));
    toast.success("Movie added to favorites!");
  };

  function sonrakiFilm() {
    setSira(sira + 1);
  }

  function oncekiFilm() {
    setSira(sira - 1)
  }

  function basaDon() {
    setSira(0)
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-center py-3">

          <button
              onClick={basaDon}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Başa dön
            </button>

           {sira > 0 && <button
              onClick={oncekiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              ◀
            </button>}

            {sira < movies.length -1  &&<button
              onClick={sonrakiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              ▶
            </button>}



            <button
              onClick={handleAddToFavorites}
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            >
              ★ Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
