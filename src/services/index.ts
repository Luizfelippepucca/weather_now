import axios from "axios";
import { api_key,base_url } from "./constants";


export const apiForcities = axios.create({
   baseURL:base_url,
   params:{
       appid:api_key,
       lang:`pt_br`,
   },
   method:'GET',
   headers:{'Content-type':'application/json'}
})

