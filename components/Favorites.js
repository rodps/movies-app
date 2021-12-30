import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { getFavoriteMovies as getFavoriteMoviesFromApi } from "../api/MovieAPI";

export default function Favorites() {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    async function getFavoriteMovies() {
        setLoading(true);
        try {
            const movies = await getFavoriteMoviesFromApi();
            setData(movies);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    function onRefresh() {
        setData([]);
        getFavoriteMovies()
    }

    useEffect(() => {
        getFavoriteMovies();
    }, []);

    return (
        <MovieList data={data} isLoading={isLoading} onRefresh={onRefresh}  />
    )
}