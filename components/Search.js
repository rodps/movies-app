import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useState } from 'react';

import MovieList from './MovieList';

import { searchMovies as searchMoviesFromApi } from '../api/MovieAPI';

export default function Search() {

  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [timeoutVar, setTimeoutVar] = useState();
  const [isLoading, setLoading] = useState(false);

  const onChangeSearch = query => {
    setSearchQuery(query);

    clearTimeout(timeoutVar)
    setData([])

    if(query == '') return;

    setTimeoutVar(setTimeout(function() {
      searchMovies(query);
    }, 500));
  }

  async function searchMovies(query) {
    setLoading(true);
    try {
      const movies = await searchMoviesFromApi(query);
      console.log(movies);
      setData(movies.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={{flex: 1}}>
      <SearchBar
        placeholder="Insert movie name"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <MovieList data={data} isLoading={isLoading} />
    </View>
  );
}