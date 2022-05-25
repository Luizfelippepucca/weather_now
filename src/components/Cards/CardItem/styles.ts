import styled from 'styled-components';

interface testeProps{
    teste2?:boolean;
}
export const CardItemContainer = styled.div<testeProps>`
width:250px ;
height:${props => props.teste2 ? '270' : '230'}px ;
background-color:#fff;
border-radius:5px ;
box-shadow:2px 2px 5px rgba(51,51,51,0.1) ;
display:flex ;
flex-direction:column ;
justify-content:space-between ;
`

export const CardTitleArea = styled.div<testeProps>`
 width:100%;
 border-bottom:${props=>props.teste2?' 1px solid  #ebebeb':0} ;
`

export const CardTitle = styled.h5`
font-size:20px ;
padding:10px 0px ;
font-family: Helvetica,Arial ;
font-weight:lighter ;
color:#737c84;
text-align:center ;
`;

export const ContentCard = styled.div`
 height:200px;
 font-family: Helvetica,Arial ;
 display:flex ;
 font-weight:500 ;
 align-items:center ;
 justify-content:center ;
 flex-direction:column ;


`
export const Degrees = styled.div`
flex:1;
display:flex ;
justify-content:center ;
align-items:center ;
color:#ff9632;
font-size:82px ;
`

export const AdtionalsInfo = styled.div`
width:100% ;
display:flex ;
justify-content:center ;
align-items:center ;
font-weight:100 ;
font-family: Helvetica,Arial ;
color:#b4b4b4 ;
`

export const Humidity = styled.div`
 width:50% ;
 text-align:center ;
 height:auto ;
 display:flex ;
 flex-direction:column ;
 justify-content:space-between ;
 
`

export const HumidityTitle = styled.span`
 font-size:12px ;
`

export const WrapperHumidityValue = styled.span`
font-size:14px ;
`
export const HumidityValue = styled.span`
color:#737c84;

 text-align:center ;
`

export const Pressure = styled.div`
 width:50% ;
 height:auto ;
 display:flex ;
 flex-direction:column ;
 justify-content:space-between ;
 text-align:center ;
`


export const PressureTitle = styled.span`
 font-size:12px ;
`

export const WrapperPressureValue = styled.span`
font-size:14px ;
`
export const PressureValue = styled.span`
color:#737c84;
 text-align:center ;
`

export const FooterCard = styled.div`
width:100% ;
background-color:rgba(241,241,241,0.5);
font-size:12px ;
color:#c3c3c3;
height:50px ;
display:flex ;
align-items:center ;
justify-content:center ;

`