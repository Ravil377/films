import React from 'react';
import Spinner from '../../images/Spinner.svg';

function Loading() {

    return (
        <img src={Spinner} alt="Загрузка" className="loading" />
    );
}

export default Loading;