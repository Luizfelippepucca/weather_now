import  {Container } from './styles';
import { BodyProps } from './types';


const Body = ({ children }:BodyProps)=>{
    return <Container>{children}</Container>
}

export default Body;