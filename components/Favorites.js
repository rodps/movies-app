import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { getFavoriteMovies as getFavoriteMoviesFromApi } from "../api/MovieAPI";

export default function Favorites() {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    async function getFavoriteMovies() {
        setLoading(true);
        const movies = await getFavoriteMoviesFromApi();
        console.log(movies);
        setData(movies);
        setLoading(false);
    }

    function onRefresh() {
        setData([]);
    }

    useEffect(() => {
        getFavoriteMovies();
    }, []);

    return (
        <MovieList data={data} isLoading={isLoading} onRefresh={onRefresh} />
    )
}