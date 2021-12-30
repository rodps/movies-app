import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import styled from 'styled-components/native';
import { Link } from "react-router-native";


export default function Menu({ listRef }) {
    return (
        <Container>
            <Link to='/' style={{flex: 1, alignItems: 'center', padding: 10}}>
                <MaterialIcons name="trending-up" size={28} color="white" />
            </Link>
            <Link to='/search' style={{flex: 1, alignItems: 'center', padding: 10}}>
                <MaterialIcons name="search" size={28} color="white" />
            </Link>
            <Link to='/favorites' style={{flex: 1, alignItems: 'center', padding: 10}}>
                <MaterialCommunityIcons name="heart" size={28} color="white" />
            </Link>
        </Container>
    )
}

const MenuButton = styled.Pressable`
    flex: 1;
    align-items: center;
    padding: 10px;
`;

const Container = styled.View`
    background-color: #1a1a1a;
    flex-direction: row;
    justify-content: space-around;
`;