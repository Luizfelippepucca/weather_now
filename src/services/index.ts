import { useQuery, UseQueryOptions } from 'react-query';
import { apiForcities } from './axios';
import { CitiesResponse } from "./types";


export const useSearchCities = <T=CitiesResponse>(
nameCity:string,
key:string,
options?:UseQueryOptions<CitiesResponse,T>
)=>{
  const useResponseCities = useQuery<CitiesResponse ,T>(key,
        ()=> apiForcities.get<T,CitiesResponse>(`/weather?q=${nameCity}`),
        {
          staleTime:500000,
          retry:1,
          refetchInterval:600000,
          refetchOnWindowFocus: false,
          ...options
        },
       
    )
 return useResponseCities;
};

