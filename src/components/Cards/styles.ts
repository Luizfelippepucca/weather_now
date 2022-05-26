import styled from 'styled-components';
import { CardItemContainerProps } from './types';

export const ContainerCards = styled.section`
width:100% ;
max-width:840px ;
display:flex ;
height:auto ;
justify-content:space-between ;
align-items:center ;
@media (max-width:768px){
   flex-direction:column ;
   margin-top:70px ;
 }

`
export const CardItemContainer = styled.div<CardItemContainerProps>`
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
@media (max-width:768px){
  margin:15px ;
  
 }

`
export const WrapperLoading = styled.div`
 flex:1;
 display:flex;
 align-items:center;
 justify-content:center;
`

export const Loading = styled.img``;