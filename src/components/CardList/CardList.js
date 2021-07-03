import React from 'react';
import Card from '../Card/Card';

function CardList({ movies, onClick, loadingDetails }) {
    return (
            <ul className="cards">
                {movies.map(item => <Card movie={item} key={item.imdbID} onClick={onClick} loadingDetails={loadingDetails} />)}
            </ul>
    );
}

export default CardList;