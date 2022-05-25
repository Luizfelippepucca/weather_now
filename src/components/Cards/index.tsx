import CardItem from "./CardItem";
import { ContainerCards } from "./styles";

const Cards = ()=>{
    return(
        <ContainerCards>
            <CardItem />
            <CardItem teste={true}/>
            <CardItem />
        </ContainerCards >
    )
}

export default Cards;