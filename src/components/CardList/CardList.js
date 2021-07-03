import React from 'react';
import Card from '../Card/Card';

function CardList({movies, onClick}) {
    return (
            <ul className="cards">
                {movies.map(item => <Card movie={item} key={item.imdbID} onClick={onClick} />)}
            </ul>
    );
}

export default CardList;