import { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import MovieListHeader from "./MovieListHeader";
import MovieList from "./MovieList";

import { getMovies as getMoviesFromApi } from '../api/MovieAPI';

export default function Home({ listRef }) {

    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [mediaType, setMediaType]  = useState('movie');
    const [timeWindow, setTimeWindow] = useState('week');
    const [page, setPage] = useState(1);

    async function getMovies() {
      setLoading(true);
      try{
        const movies = await getMoviesFromApi(timeWindow, mediaType, page);
        setData([...data, ...movies.results])
      } catch(error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    function changeMediaType(value) {
      setData([]);
      setMediaType(value);
      setPage(1);
    }

    function changeTimeWindow(value) {
      setData([]);
      setTimeWindow(value);
      setPage(1);
    }

    function onRefresh() {
      setData([]);
      setPage(0);
    }

    useEffect(() => {
      if(page == 0) {
        setPage(1)
      } else {
        getMovies();
      }
    }, [timeWindow, mediaType, page]);

    let scrollBegin = false;

    return (      
      <>
      <MovieListHeader 
        mediaType={mediaType} 
        onMediaTypeChange={changeMediaType}
        timeWindow={timeWindow}
        onTimeWindowChange={changeTimeWindow}
      />
      <MovieList 
        listRef={listRef}
        data={data} 
        isLoading={isLoading}
        onRefresh={onRefresh}
        onEndReached={() => { setPage(page + 1) }} />
      </>
    )
}

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
`;