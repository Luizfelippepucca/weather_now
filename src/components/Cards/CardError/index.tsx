import { useCallback } from "react";
import { useQueryClient } from "react-query";
import { Button, ContainerCardError, TextButton } from "./styles";

interface CardErrorProps{
    id:string;
}

export const CardError = ({id}:CardErrorProps)=>{
    const queryClient = useQueryClient();

     const handleResetQuery =  useCallback(()=>{

        if (id === 'Nuuk'){
              
            return queryClient.resetQueries('NuukKey');
        }
        
        if (id === 'Urubici'){
             return queryClient.resetQueries('UrubiciKey');
        }
        
            return queryClient.resetQueries('NairobiKey');
    },[queryClient,id]);


  return(
      <ContainerCardError>
          <TextButton>Something went wrong</TextButton>
           <Button onClick={handleResetQuery}>Try Again</Button>
      </ContainerCardError>
   
  )
}

export default CardError;