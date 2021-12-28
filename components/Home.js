import { ActivityIndicator, FlatList, View } from "react-native";
import { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';

import MovieItem from './MovieItem';

export default function Home() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=b1b73b1f6fc72e1b72afce2f77c88a94');
        const json = await response.json();
        setData(json.results);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    const ListHeader = () => {
        return (
          <View style={{flexDirection: 'row', justifyContent: 'center', padding: 10}}>
            <Picker
              selectedValue="movies"
              style={{color: 'white', width: 150}}
              dropdownIconColor='white'
            >
              <Picker.Item label="Movies" value="movies" />
              <Picker.Item label="TV" value="tv" />
              <Picker.Item label="Person" value="person" />
            </Picker>
    
            <Picker
              selectedValue="week"
              style={{color: 'white', width: 150, marginLeft: 10}}
              dropdownIconColor='white'
            >
              <Picker.Item label="Day" value="day" />
              <Picker.Item label="Week" value="week" />
            </Picker>
          </View>
        )
    };

    return (
        <>
        {isLoading ? <ActivityIndicator color="#0000ff" /> : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              ListHeaderComponent={ListHeader}
              renderItem={({ item }) => (
                <MovieItem 
                  imageUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  backgroundUrl={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  title={item.title}
                  description={item.overview}
                  ratio={item.vote_average} 
                />
              )}
            />
        )}
        </>
    )
}