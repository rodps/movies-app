import {API_URL, API_KEY} from "@env"

export async function getMovies(timeWindow, mediaType, page) {
    try {
        const response = await fetch(`${API_URL}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}&page=${page}`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export async function searchMovies(query) {
    console.log(API_URL);
    try {
        const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}