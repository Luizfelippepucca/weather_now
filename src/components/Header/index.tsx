import { HeaderArea } from './styles';
import {Logo} from './styles';
import logoimg from '../../assets/logo.png';




 const Header = ()=>{
    return(
        <HeaderArea>
            <Logo src={logoimg}/>
        </HeaderArea>
    )
};

export default Header;