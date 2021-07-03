import Header from "./components/Header/Header";
import Search from './components/Search/Search';
import CardList from "./components/CardList/CardList";
import api from "./Api/Api";
import React from "react";
import { CurrentMovieContext } from "./contexts/CurrentMovieContext";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/error";

function App() {
  const [movies, setMovies] = React.useState([]);
  const [search, setSearch] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [currentMovie, setCurrentMovie] = React.useState({});
  
  const handleSubmitSearch = () => {
    setLoading(true);
    api.getMovies(search)
    .then(res => {
        if(res.Response === 'True') {
          setError(false);
          setMovies(res.Search);
          setLoading(false);
        } else {
          setError(true);
          setMovies([]);
        }
        setSearch(null);
    }).catch(err => console.log(err));
  }

  const handleChangeSearchInput = (inputSearch) => {
    setSearch(inputSearch);
  }

  const handleClickDetails = (id) => {
    api.getMoviesById(id)
    .then(res => {
      setCurrentMovie(res);
    }).catch(err => console.log(err));
  }

  return (
    <>
    <CurrentMovieContext.Provider value={currentMovie}>
        <Header />
        <Search onSubmit={handleSubmitSearch} search={search} onChange={handleChangeSearchInput} />
        {(loading && !error) ? 
          <Loading /> : (!error) ? <CardList movies={movies} onClick={handleClickDetails} /> : <Error />
        }
    </CurrentMovieContext.Provider>
    </>
  );
}

export default App;
