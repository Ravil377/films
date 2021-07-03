import React from 'react';
import { CurrentMovieContext } from '../../contexts/CurrentMovieContext';

function Card(props) {
    const [isOpenDetails, setIsOpenDetails] = React.useState(false);
    const isMovieDetails = React.useContext(CurrentMovieContext);

    const handleClickDetails = () => {
        setIsOpenDetails((state) => !state);
        props.onClick(props.movie.imdbID);
    }
    

    return (
        <li className="card">
            <figure className="card__image">
                <img src={props.movie.Poster} alt={props.movie.Title} className="card__image-slide" />
                <figcaption className="card__caption">{props.movie.Title}</figcaption>
            </figure>
            <p className="card__more" onClick={handleClickDetails}>Показать детали</p>
            <div className={`card__details ${isOpenDetails && 'card__details_open'}`}>
                <p className="card__info">{`Режиссер: ${isMovieDetails.Director}`}</p>
            </div>
        </li>
    );
}

export default Card;