import { CitiesResponse } from "../../../services/types";
export interface CardItemProps {
    teste?:boolean;
    isLoading?:boolean;
    isSuccess?:boolean;
    item?:CitiesResponse;
}