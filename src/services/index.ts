import { useQuery, UseQueryOptions } from 'react-query';
import { apiForcities } from './axios';
import { cityKey } from './key';
import { CitiesResponse } from "./types";


export const useSearchCities = <T=CitiesResponse>(
nameCity:string,
options?:UseQueryOptions<CitiesResponse,T>
)=>{
  const useResponseCities = useQuery<CitiesResponse ,T>(cityKey,
        ()=> apiForcities.get<T,CitiesResponse>(`/weather?q=${nameCity}`),
        options
    );
 return useResponseCities
}

