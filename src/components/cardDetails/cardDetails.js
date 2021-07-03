import React from 'react';
import { CurrentMovieContext } from '../../contexts/CurrentMovieContext';

function CardDetails(props) {
    const isMovieDetails = React.useContext(CurrentMovieContext);
    return (
        <>
            <p className="card__info">{`${isMovieDetails.Plot}`}</p>
            <p className="card__info"><span className="card__info_bold">Премьера: </span>{isMovieDetails.Released}</p>
            <p className="card__info"><span className="card__info_bold">Режиссер: </span>{isMovieDetails.Director}</p>
            
        </>
    );
}

export default CardDetails;