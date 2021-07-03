import React from 'react';
import { CurrentMovieContext } from '../../contexts/CurrentMovieContext';
import CardDetails from '../cardDetails/cardDetails';

function Card(props) {
    const isMovieDetails = React.useContext(CurrentMovieContext);

    const handleClickDetails = () => {
        if(props.movie.imdbID !== isMovieDetails.imdbID) {
            props.onClick(props.movie.imdbID);
        } else {
            props.onClick(null);
        }
    }

    return (
        <li className="card">
            <figure className="card__image">
                <img src={props.movie.Poster} alt={props.movie.Title} className="card__image-slide" />
                <figcaption className="card__caption">{props.movie.Title}</figcaption>
            </figure>
            <p className="card__more" onClick={handleClickDetails}>Показать детали</p>
            <div className={`card__details ${props.movie.imdbID === isMovieDetails.imdbID && 'card__details_open'}`}>
                <CardDetails />
            </div>
        </li>
    );
}

export default Card;