import { convertForCelsius } from "../../../utils";
import { CardItemProps } from "./types";
import Loader from '../../../assets/loader.svg';
import { 
    AdtionalsInfo, CardItemContainer,CardTitle,
    CardTitleArea, ContentCard ,FooterCard,
    Degrees,Humidity,Pressure, HumidityTitle,
    PressureTitle, PressureValue, HumidityValue,
    WrapperHumidityValue, 
    WrapperPressureValue,
    WrapperLoading,
    Loading,
    Percentage,
    PressureHpa
 } from "./styles";

const CardItem = ({isSuccess,isLoading,item}:CardItemProps)=>{
 
    const degress = convertForCelsius(item?.data.main.temp );
    const humidity = item?.data.main.humidity;
    const pressure = item?.data.main.pressure;
    const timestemp =  item?.data.dt;
    const hours = new Date(timestemp ? timestemp:'').getHours();
    const minutes = new Date(timestemp ? timestemp:'').getMinutes();
    const seconds = new Date(timestemp ? timestemp:'').getSeconds();

   
    return(
        <CardItemContainer height={item?.data.name === 'Urubici'?true:false}>
        {isLoading && 
            <WrapperLoading>
                <Loading src={Loader} alt="carregando..."/>
            </WrapperLoading>
        }
        {isSuccess && !isLoading && (
            <>
                <CardTitleArea border={item?.data.name === 'Urubici'?true:false}>
                    <CardTitle >{`${item?.data.name}, ${item?.data.sys.country}`}</CardTitle>
                </CardTitleArea >
                <ContentCard>
                    <Degrees temp={degress}>{degress}°</Degrees>
                    {item?.data.name === 'Urubici' && 
                    <AdtionalsInfo>
                        <Humidity>
                            <HumidityTitle>HUMIDITY</HumidityTitle>
                            <WrapperHumidityValue>
                                <HumidityValue>{humidity}</HumidityValue>
                               <Percentage>%</Percentage>
                            </WrapperHumidityValue>
                        </Humidity>
                        <Pressure>
                            <PressureTitle>PRESSURE</PressureTitle>
                            <WrapperPressureValue>
                                <PressureValue >{pressure}</PressureValue>
                                <PressureHpa>hPa</PressureHpa>
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