export const convertForCelsius = (value?:number)=>{
    if(value){
       return Math.floor(value - 273.15);
    }
 
};

export  const renderizeColor = (temp:number)=>{

    if( temp <= 5){
        return `#69A3Ff`;
    }

    if( temp > 5 && temp <=25){
        return `#ff9632`;
    }

    return `#ED1946`;
   
};