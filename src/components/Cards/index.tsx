import { useSearchCities } from "../../services";
import CardItem from "./CardItem";
import { ContainerCards } from "./styles";

const Cards = ()=>{
    const {data,isLoading,isSuccess} = useSearchCities('Urubici',{
       // staleTime:3000,
        retry:3,
        onSuccess:()=>console.log('fex-->','atualizou'),
        cacheTime:600000
       
    });

   

    return(
        <ContainerCards>
            <CardItem />
            <CardItem teste={true} isLoading={isLoading} isSuccess={isSuccess} item={data}/>
            <CardItem />
        </ContainerCards >
    )
}

export default Cards;