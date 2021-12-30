import {API_URL, API_KEY} from "@env"

var favorites = [];

export async function getMovies(timeWindow, mediaType, page) {
    try {
        const response = await fetch(`${API_URL}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}&page=${page}&language=pt-BR`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export async function searchMovies(query) {
    try {
        const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=pt-BR`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export async function getMovie(id) {
    try {
        const response = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

//mockup
export async function addFavorite(movieId) {
    await favorites.push(movieId);
    return true;
}

export async function removeFavorite(movieId) {
    favorites = await favorites.filter((value) => {
        return value != movieId;
    })
    return true;
}

export async function getFavorites() {
    return favorites;
}

export async function getFavoriteMovies() {
    const movies = Promise.all(favorites.map(async (movieId) => {
        return await getMovie(movieId);
    }))

    return movies;
}