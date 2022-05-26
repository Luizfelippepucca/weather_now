

import { useSearchCities } from "../../services";
import CardItem from "./CardItem";
import { ContainerCards } from "./styles";

const Cards = ()=>{
  const {data,isLoading,isSuccess} = useSearchCities('Urubici','UrubiciKey');
  const {data:dataNuuk,isLoading:isLoadingNuuk,isSuccess:isSuccessNuuk} = useSearchCities('Nuuk','NuukKey');
  const {data:dataNairobi,isLoading:isLoadingNairobi,isSuccess:isSuccessNairobi} = useSearchCities('Nairobi','NairobiKey');
 
 
    return(
        <ContainerCards>
            <CardItem item={dataNuuk} isLoading={isLoadingNuuk} isSuccess={isSuccessNuuk}/>
            <CardItem  isLoading={isLoading} isSuccess={isSuccess} item={data}/> 
            <CardItem item={dataNairobi} isLoading={isLoadingNairobi} isSuccess={isSuccessNairobi}/>
        </ContainerCards >
    )
}

export default Cards;