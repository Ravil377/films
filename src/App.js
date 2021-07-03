import Header from "./components/Header/Header";
import Search from './components/Search/Search';
import CardList from "./components/CardList/CardList";
import api from "./Api/Api";
import React from "react";
import { CurrentMovieContext } from "./contexts/CurrentMovieContext";
import Loading from "./components/Loading/Loading";

function App() {
  const [movies, setMovies] = React.useState([]);
  const [search, setSearch] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [currentMovie, setCurrentMovie] = React.useState({});
  
  const handleSubmitSearch = () => {
    setLoading(true);
    api.getMovies(search)
    .then(res => {
        if(res.Response === 'True') {
          setMovies(res.Search);
          setLoading(false);
        } else {
          setMovies([])
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
        {loading ? 
          <Loading /> :
          <CardList movies={movies} onClick={handleClickDetails} />
        }
    </CurrentMovieContext.Provider>
    </>
  );
}

export default App;
