import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons'; 
import { Image, ImageBackground, View } from 'react-native';

export default function MovieItem({ imageUrl, backgroundUrl, title, description, ratio }) {
    return (
        <Item source={{uri: backgroundUrl}} imageStyle={{ borderRadius: 5, opacity: 0.35}}>
            <ItemImage>
                <Image
                    style={{flex: 1, width: 80, borderRadius: 3}}
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
                <AntDesign name="hearto" size={20} color="crimson" />
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