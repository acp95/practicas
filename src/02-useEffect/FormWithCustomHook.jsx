import { useEffect} from "react"
import { UseForm } from "../hooks/UseForm";

import { Message } from "./Message";

export const  FormWithCustomHook= () => {

  const{formState,onInputChange,onResetForm,username,email,password}= UseForm(
   
    {
        username:"",
        email:"",
        password:""
    });
    (valores)=>{
    if(!valores.username);
    return console.log("vacio");
    }
    
    //const{username,email,password}=formState;

/*
useEffect(()=>{
   // console.log("useEfecct called!");

},[]);

useEffect(()=>{
    //console.log("useEfecct changed!");

},[formState]);

useEffect(()=>{
    //console.log("useEfecct changed de mail !!");
},[email]);

*/
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

<input 
        type="password"
        className="form-control mt-2" 
        placeholder="Contraseña"
        name="password" 
        value={password}
        onChange={onInputChange}

  />

  <button onClick={onResetForm } className="btn btn-primary mt-2">Borrar</button>
 
{(username==="Porfirio") && <Message/>}
   </>
  )
}
