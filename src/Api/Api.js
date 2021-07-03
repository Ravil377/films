class Api {
    constructor(options) {
        this._options = options;
    }

    _answerForServer(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies(movie) {
        return fetch(`${this._options.baseUrl}?s=${movie}&apikey=${this._options.authorization}`)
        .then((res) => this._answerForServer(res));
    }

    getMoviesById(id) {
        return fetch(`${this._options.baseUrl}?i=${id}&plot=full&apikey=${this._options.authorization}`)
        .then((res) => this._answerForServer(res));
    }


}

const apiOptions = {
    baseUrl: "http://www.omdbapi.com/",
    authorization: "f2ead94d",
};

const api = new Api(apiOptions);

export default api;
 