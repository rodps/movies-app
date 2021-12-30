import { useRef } from 'react';
import { Text, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Home from './components/Home';
import Menu from './components/Menu';
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import Search from './components/Search';

export default function App() {

  const listRef = useRef();
  
  return (
    <NativeRouter>
      <Container>
        <StatusBar barStyle='light' backgroundColor="transparent" translucent />

        <Header>
          <Routes>
            <Route exact path="/" element={<HeaderText>Trending</HeaderText>} />
            <Route path="/search" element={<HeaderText>Search</HeaderText>} />
          </Routes>
        </Header>

        <Body>
          <Routes>
            <Route exact path="/" element={<Home listRef={listRef} />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Body>

        <Menu listRef={listRef}/>
      </Container>
    </NativeRouter>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  background-color: #1a1a1a;
  padding-top: ${StatusBar.currentHeight}px;
`;

const HeaderText = styled.Text`
  color: white;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
  padding: 10px;
`;

const Body = styled.View`
  flex: 1;
  background-color: #0a0a0a;
`;

const Footer = styled.View`

`;