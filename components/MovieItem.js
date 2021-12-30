import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';
import { Image, ImageBackground, View } from 'react-native';
import { memo, useEffect, useState } from 'react';

import {
    getFavorites as getFavoritesFromApi,
    addFavorite as addFavoriteFromApi,
    removeFavorite as removeFavoriteFromApi
} from '../api/MovieAPI';

function MovieItem({ imageUrl, backgroundUrl, title, description, ratio, id }) {

    const [isFav, setFav] = useState(false);

    async function isFavorite() {
        const favorites = await getFavoritesFromApi();
        let res = false;
        favorites.forEach(movieId => {
            if (movieId == id) res = true;
        })
        setFav(res);
    }

    async function changeFavorite() {
        let result = !isFav;
        setFav(!isFav);
        result ? addFavoriteFromApi(id) : removeFavoriteFromApi(id);
    }

    useEffect(() => {
        isFavorite();
    }, []);

    return (
        <Item source={{ uri: backgroundUrl }} imageStyle={{ borderRadius: 5, opacity: 0.35 }}>
            <ItemImage>
                <Image
                    style={{ height: 110, width: 80, borderRadius: 3 }}
                    source={{
                        uri: imageUrl,
                    }}
                />
            </ItemImage>
            <ItemInfo>
                <ItemTitle numberOfLines={1}>{title}</ItemTitle>
                <ItemDescription numberOfLines={4}>{description}</ItemDescription>
                <ItemRatio>{ratio} <AntDesign name="star" /></ItemRatio>
            </ItemInfo>
            <ItemFav>
                <AntDesign name={isFav ? "heart" : "hearto"} size={20} color="crimson" onPress={() => { changeFavorite() }} />
            </ItemFav>
        </Item>
    );
}

const Item = styled.ImageBackground`
    margin-bottom: 10px;
    flex-direction: row;
    background-color: black;
    border-radius: 5px;
    align-items: center;
    overflow: hidden;
    margin-left: 10px;
    margin-right: 10px;
`;

const ItemImage = styled.View`
    padding: 3px;
`;

const ItemInfo = styled.View`
    flex: 1;
    padding: 5px;
`;

const ItemTitle = styled.Text`
    font-weight: bold;
    color: white;
`;

const ItemDescription = styled.Text`
    color: white;
    text-align: justify;
`;

const ItemRatio = styled.Text`
    color: gold;
`;

const ItemFav = styled.View`
    padding: 10px;
`;

export default memo(MovieItem);