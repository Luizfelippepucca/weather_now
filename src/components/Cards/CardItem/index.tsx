import { 
    AdtionalsInfo, CardItemContainer,CardTitle,
    CardTitleArea, ContentCard ,FooterCard,
    Degrees,Humidity,Pressure, HumidityTitle,
    PressureTitle, PressureValue, HumidityValue,
    WrapperHumidityValue, 
    WrapperPressureValue
 } from "./styles";

 interface CardItemProps {
     teste?:boolean;
 }

const CardItem = ({teste}:CardItemProps)=>{
   
    const graus = `19°`;
    const humidty = `75`;
    const pressure = `892`;


    return(
    <CardItemContainer teste2={teste}>
        <CardTitleArea teste2={teste}>
            <CardTitle >Urubi, BR</CardTitle>
        </CardTitleArea >
        <ContentCard>
            <Degrees>{graus}</Degrees>
            {teste && 
            <AdtionalsInfo>
                <Humidity>
                    <HumidityTitle>HUMIDITY</HumidityTitle>
                    < WrapperHumidityValue>
                    <HumidityValue>{humidty}</HumidityValue>%
                    </WrapperHumidityValue>
                </Humidity>
                <Pressure>
                    <PressureTitle>PRESSURE</PressureTitle>
                    <WrapperPressureValue>
                    <PressureValue >{pressure}</PressureValue>hPa
                    </WrapperPressureValue> 
                </Pressure>
            </AdtionalsInfo>}
        </ContentCard>
        <FooterCard>update at 02.42.32 PM</FooterCard>
      
    </CardItemContainer>)
}

export default CardItem;