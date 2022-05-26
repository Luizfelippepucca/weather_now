import { useQueryClient } from "react-query";
import { Button, ContainerCardError, TextButton } from "./styles";

interface CardErrorProps{
    id:string;
}

export const CardError = ({id}:CardErrorProps)=>{
    const queryClient = useQueryClient();

     const handleResetQuery = ()=>{

          if (id === 'Nuuk'){
              
            return queryClient.invalidateQueries('NuukKey');
            }
        
            if (id === 'Urubici'){
                return queryClient.invalidateQueries('UrubiciKey');
            }
        
            return queryClient.invalidateQueries('NairobiKey');
          };
  return(
      <ContainerCardError>
          <TextButton>Something went wrong</TextButton>
           <Button onClick={handleResetQuery}>Try Again</Button>
      </ContainerCardError>
   
  )
}

export default CardError;