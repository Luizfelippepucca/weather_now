import { CitiesResponse } from "../../../services/types";
export interface CardItemProps {
    isLoading:boolean;
    isError?:boolean;
    isSuccess:boolean;
    item?:CitiesResponse;
  
}

export interface CardTitleAreaProps{
    border?:boolean;
   
}

export interface DegreesProps{
    temp?:number;
}