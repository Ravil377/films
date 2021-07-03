import Header from "./components/Header/Header";
import Search from './components/Search/Search';
import CardList from "./components/CardList/CardList";
import api from "./Api/Api";
import React from "react";
import { CurrentMovieContext } from "./contexts/CurrentMovieContext";

function App() {
  const [movies, setMovies] = React.useState([]);
  const [search, setSearch] = React.useState(null);
  const [currentMovie, setCurrentMovie] = React.useState({});
  
  const handleSubmitSearch = () => {
    api.getMovies(search)
    .then(res => {
        if(res.Response === 'True') {
          setMovies(res.Search);
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
        <CardList movies={movies} onClick={handleClickDetails} />
    </CurrentMovieContext.Provider>
    </>
  );
}

export default App;
