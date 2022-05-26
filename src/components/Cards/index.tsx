

import { useSearchCities } from "../../services";
import CardItem from "./CardItem";
import { CardItemContainer, Loading, WrapperLoading } from "./styles";
import { ContainerCards } from "./styles";
import Loader from '../../assets/loader.svg';
import CardError from "./CardError";


const Cards = ()=>{
  const {data,isLoading,isSuccess,isError} = useSearchCities('Urubici','UrubiciKey');
  const {data:dataNuuk,isLoading:isLoadingNuuk,isSuccess:isSuccessNuuk,isError:isErrorNuuk} = useSearchCities('Nuuk','NuukKey');
  const {data:dataNairobi,isLoading:isLoadingNairobi,isSuccess:isSuccessNairobi,isError:isErrorNairobi} = useSearchCities('Nairobi','NairobiKey');


    return(
        <ContainerCards>
              <CardItemContainer >
                {isErrorNuuk &&   <CardError id="Nuuk"/>}  
                {isLoadingNuuk && 
                    <WrapperLoading>
                        <Loading src={Loader} alt="carregando..."/>
                    </WrapperLoading>
                }
                {isSuccessNuuk && 
                    <CardItem item={dataNuuk} isLoading={isLoadingNuuk} isSuccess={isSuccessNuuk}  />
                }
            </CardItemContainer>
            <CardItemContainer height={data?.data.name === 'Urubici'?true:false}>
                {isError &&   <CardError id="Urubici"/>}  
                {isLoading && 
                    <WrapperLoading>
                        <Loading src={Loader} alt="carregando..."/>
                    </WrapperLoading>
                }
                {!isLoading&& !isError&&  <CardItem  isLoading={isLoading} isSuccess={isSuccess} item={data} /> }
            </CardItemContainer>
            <CardItemContainer>
                {isErrorNairobi &&   <CardError id="Nairobi"/>}  
                {isLoadingNairobi && 
                    <WrapperLoading>
                        <Loading src={Loader} alt="carregando..."/>
                    </WrapperLoading>
                }
                {!isLoadingNairobi && !isErrorNairobi &&
                    <CardItem item={dataNairobi} isLoading={isLoadingNairobi} isSuccess={isSuccessNairobi}  />
                }
            </CardItemContainer>
        </ContainerCards >
    )
}

export default Cards;