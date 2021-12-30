import { View, Text, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components';

export default function MovieListHeader({mediaType, onMediaTypeChange, timeWindow, onTimeWindowChange}) {
    return (

    <Container>
        <View style={{flexDirection: 'row', justifyContent: 'center', padding: 10}}>
            <Picker
            selectedValue={mediaType}
            style={{color: 'white', width: 150}}
            dropdownIconColor='white'
            onValueChange={(itemValue) => {
                onMediaTypeChange(itemValue);
            }}
            >
            <Picker.Item label="All" value="all" />
            <Picker.Item label="Movies" value="movie" />
            <Picker.Item label="TV" value="tv" />
            </Picker>

            <Picker
            selectedValue={timeWindow}
            style={{color: 'white', width: 150, marginLeft: 10}}
            dropdownIconColor='white'
            onValueChange={(itemValue) => {
                onTimeWindowChange(itemValue)
            }}
            >
            <Picker.Item label="Day" value="day" />
            <Picker.Item label="Week" value="week" />
            </Picker>
        </View>
      </Container>

    )
};


const Container = styled.View`
    background-color: #1a1a1a;
`;