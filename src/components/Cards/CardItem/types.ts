import { CitiesResponse } from "../../../services/types";
export interface CardItemProps {
     isLoading:boolean;
     isError?:boolean;
    isSuccess:boolean;
    item?:CitiesResponse;
  
  
}