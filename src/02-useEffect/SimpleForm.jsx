import { useEffect, useState } from "react"

import { Message } from "./Message";

export const SimpleForm = () => {

const [formState, setFormState] = useState({
    username:"Porfirio",
    email:"1995cerna@gmail.com"
})

const {username,email}=formState;

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

useEffect(()=>{
   // console.log("useEfecct called!");

},[]);

useEffect(()=>{
    //console.log("useEfecct changed!");

},[formState]);

useEffect(()=>{
    //console.log("useEfecct changed de mail !!");
},[email]);


  return (
  <>
  <h1>Formulario Simple</h1>
  <hr />
  <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username" 
        value={username}
        onChange={onInputChange}
  
  />
  <input 
        type="email"
        className="form-control mt-2"
        placeholder="1995cerna@gmail.com"
        name="email" 
        value={email}
        onChange={onInputChange}

  />
 {(username==="Porfirio2") && <Message/>}


   </>
  )
}
