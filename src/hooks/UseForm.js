
import { useState } from "react";


export const UseForm = (initialForm={}) => {

    const [formState, setFormState] = useState(initialForm)
    
   
    /*const onInputChange=(event)=>{
        console.log(event.target.value);
    }
    */
    
    const onInputChange=({target})=>{
        const{name,value}=target;
        //console.log({name,value});
        setFormState({
            ...formState,
            [name]:value
        });
    }
    const onResetForm=()=>{
      setFormState(initialForm);
 
    }
  return {
    ... formState,
    formState,
    onInputChange,
    onResetForm


  }
}
