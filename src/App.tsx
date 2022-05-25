import Header from './components/Header';
import Body from './components/Body';
import { Container } from './styles';
import { apiForcities } from './services';
import { useQuery } from 'react-query';
import './App.css';

const App = ()=> {

  const {data } = useQuery('cities',async ()=>{
    const response = await apiForcities.get(`/weather?q=Urubici`);
    return response.data;
  
  });
 
  console.log('fex-->',data);
 
  return (
      <Container>
        <Header/>
        <Body><div>teste</div></Body>
      </Container>
    
  );
}

export default App;
