import React from 'react';
import Card from '../Card/Card';

function CardList({ movies, onClick, loadingDetails, isLoading, idDetails }) {
    return (
            <ul className="cards">
                {movies.map(item => 
                    <Card movie={item} key={item.imdbID} 
                          onClick={onClick} loadingDetails={loadingDetails} 
                          isLoading={isLoading} idDetails={idDetails} />)
                }
            </ul>
    );
}

export default CardList;