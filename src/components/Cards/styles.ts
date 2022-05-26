import styled from 'styled-components';

interface HeightProps{
    height?:boolean;
}

export const ContainerCards = styled.div`
width:100% ;
max-width:840px ;
display:flex ;
justify-content:space-between ;
align-items:center ;

`

export const CardItemContainer = styled.div<HeightProps>`
width:250px ;
height:${({height}) => height ? '270' : '230'}px ;
background-color:#fff;
border-radius:5px ;
box-shadow:2px 2px 5px rgba(51,51,51,0.1) ;
display:flex ;
flex-direction:column ;
align-items:center ;
justify-content:space-between ;
font-family: Helvetica,Arial ;
`
export const WrapperLoading = styled.div`
 flex:1;
 display:flex;
 align-items:center;
 justify-content:center;
`

export const Loading = styled.img``;