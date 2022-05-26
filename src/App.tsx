import Header from './components/Header';
import Body from './components/Body';
import { Container } from './styles';
import Cards from './components/Cards';
import './App.css';

const App = ()=> {

  return (
      <Container>
        <Header/>
        <Body>
          <Cards/>
        </Body>
      </Container>
    
  );
}

export default App;
