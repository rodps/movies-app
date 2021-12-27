import { ActivityIndicator, ScrollView, Text, View, TextInput, StatusBar, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MovieItem from './components/MovieItem';
import { useState, useEffect } from 'react';

export default function App() {

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

  const [fontsLoaded] = useFonts({
    'Lobster-Regular': require('./assets/fonts/Lobster Regular.ttf'),
  });

  if (!fontsLoaded)
    return <AppLoading />;
  
  return (
    <Container>
      <StatusBar barStyle='light-content' />

      <Header>
        <HeaderText>Trending</HeaderText>
      </Header>

      <Body>
        {isLoading ? <ActivityIndicator color="#0000ff" /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <MovieItem 
                imageUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                title={item.title}
                description={item.overview}
                ratio={item.vote_average} 
              />
            )}
          />
        )}
      </Body>

      <Footer>
        <Text>Teste</Text>
      </Footer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  background-color: black;
`;

const HeaderText = styled.Text`
  font-size: 28px;
  color: white;
  text-align: center;
  padding: 10px;
  font-family: 'Lobster-Regular';
`;

const Body = styled.View`
  margin: 10px;
  flex: 1;
`;

const Footer = styled.View`
  padding: 30px;
  background-color: red;
`;