import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons'; 
import { Image } from 'react-native';

export default function MovieItem({ imageUrl, title, description, ratio }) {
    return (
        <Item>
            <ItemImage>
                <Image
                    style={{width: 80, height: 80}}
                    source={{
                        uri: imageUrl,
                    }}
                />
            </ItemImage>
            <ItemInfo>
                <ItemTitle numberOfLines={1}>{title}</ItemTitle>
                <ItemDescription numberOfLines={2}>{description}</ItemDescription>
                <ItemRatio>{ratio} <AntDesign name="star" /></ItemRatio>
            </ItemInfo>
        </Item>
    );
}

const Item = styled.View`
    background-color: black;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

const ItemImage = styled.View`
    padding: 5px;
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
    color: rgba(255, 255, 255, 0.55);
`;

const ItemRatio = styled.Text`
    color: gold;
`;