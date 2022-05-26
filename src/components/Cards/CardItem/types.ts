import { CitiesResponse } from "../../../services/types";
export interface CardItemProps {
     isLoading:boolean;
    isSuccess:boolean;
    item?:CitiesResponse;
}