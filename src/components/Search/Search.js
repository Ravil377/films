import React from 'react';

function Search(props) {
    
    const handleChangeSearchInput = (e) => {
        if ((/^([a-zA-Z0-9]*)$/.test(e.target.value))) props.onChange(e.target.value);
    };

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        props.onSubmit();
    }

    return (
        <div className="search">
            <form name='search-movie' className="search-movie" onSubmit={handleSubmitSearch}>
                <input type="text" 
                    className="search__input" 
                    name="movie" 
                    placeholder="Название фильма" 
                    minLength="2" 
                    maxLength="30" 
                    value={props.search || ''}
                    required 
                    onChange={handleChangeSearchInput} />
                <button type="submit" className="search__button">Искать</button>
            </form>
        </div>
    );
}

export default Search;