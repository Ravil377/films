import React from 'react';
import Card from '../Card/Card';

function CardList({ movies, onClick, loading }) {
    return (
            <ul className="cards">
                {movies.map(item => 
                    <Card movie={item} key={item.imdbID} 
                          onClick={onClick} loading={loading}/>)
                }
            </ul>
    );
}

export default CardList;