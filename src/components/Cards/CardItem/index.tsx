import { convertForCelsius } from "../../../utils";
import { 
    AdtionalsInfo, CardItemContainer,CardTitle,
    CardTitleArea, ContentCard ,FooterCard,
    Degrees,Humidity,Pressure, HumidityTitle,
    PressureTitle, PressureValue, HumidityValue,
    WrapperHumidityValue, 
    WrapperPressureValue
 } from "./styles";
import { CardItemProps } from "./types";

const CardItem = ({teste,isSuccess,isLoading,item}:CardItemProps)=>{
    const degress = item?.data.main.temp;
    const humidity = item?.data.main.humidity;
    const pressure = item?.data.main.pressure;
    const timestemp =  item?.data.dt;
    const hours = new Date(timestemp ? timestemp:'').getHours();
    const minutes = new Date(timestemp ? timestemp:'').getMinutes();
    const seconds = new Date(timestemp ? timestemp:'').getSeconds();
    
   
  
    return(
        <CardItemContainer teste2={teste}>
        {isLoading && <div>carregando...</div>}
        {isSuccess && !isLoading && (
            <>
                <CardTitleArea teste2={teste}>
                    <CardTitle >{`${item?.data.name}, ${item?.data.sys.country}`}</CardTitle>
                </CardTitleArea >
                <ContentCard>
                    <Degrees>{convertForCelsius(degress)}°</Degrees>
                    {teste && 
                    <AdtionalsInfo>
                        <Humidity>
                            <HumidityTitle>HUMIDITY</HumidityTitle>
                            < WrapperHumidityValue>
                                <HumidityValue>{humidity}</HumidityValue>%
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
                {item?.data.dt && 
                <FooterCard> 
                    {`Updated at ${hours < 10 ? '0' + hours:hours}`}:
                    {minutes< 10 ? '0' + minutes:minutes}:
                    {seconds< 10 ? '0' + seconds:seconds}{' '}
                    {hours >= 0 && hours < 12 ? 'AM' :'PM'} 
                </FooterCard>
                }
            </>
        )}
        </CardItemContainer>
    )
};

export default CardItem;