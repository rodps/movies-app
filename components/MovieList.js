import { FlatList, ActivityIndicator } from "react-native"
import MovieItem from "./MovieItem";

export default function MovieList({ listRef, data, isLoading, onRefresh, onEndReached }) {

  function renderFooter() {
    return (
      isLoading ? <ActivityIndicator color="white" size="large" style={{ margin: 30 }} /> : <></>
    )
  }

  const renderItem = ({ item }) => {
    return (
      <MovieItem
        imageUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        backgroundUrl={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
        title={item.title || item.name}
        description={item.overview}
        ratio={item.vote_average}
        id={item.id}
      />
    );
  }

  let scrollBegin = false;

  return (
    <FlatList
      ref={listRef}
      data={data}
      keyExtractor={(item) => item.id}
      ListFooterComponent={renderFooter()}
      renderItem={renderItem}
      onRefresh={onRefresh}
      refreshing={false}
      progressViewOffset={200}
      onMomentumScrollBegin={() => { scrollBegin = true }}
      onEndReached={() => { if (scrollBegin) onEndReached ? onEndReached() : {} }}
      contentContainerStyle={{ paddingVertical: 15 }}
    />
  )
}