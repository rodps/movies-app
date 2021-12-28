import { Text, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Home from './components/Home';

export default function App() {
  
  return (
    <Container>
      <StatusBar barStyle='light' backgroundColor="transparent" translucent />

      <Header>
        <HeaderText>Trending</HeaderText>
      </Header>

      <Body>
        <Home />
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
  background-color: #0a0a0a;
  padding-top: ${StatusBar.currentHeight}px;
`;

const HeaderText = styled.Text`
  color: white;
  text-align: center;
  padding: 5px;
`;

const Body = styled.View`
  padding-left: 10px;
  padding-right: 10px;
  flex: 1;
  background-color: #0a0a0a;
`;

const Footer = styled.View`
  padding: 30px;
  background-color: white;
`;