import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {

  const onMouseMove =({x,y})=>{
    const coords={x,y};
    console.log(coords);
  }

  window.addEventListener("mousemove",onMouseMove);

  /*  //console.log("mensaje montado");
  window.addEventListener("mousemove",(event)=>{
    console.log(event.x,event.y);
  }
  )*/

    return () => {
      //console.log("mensaje desmontado");

      window.removeEventListener("mousemove",onMouseMove);
    }
  }, [])
  
  return (
    <>
    <h3>Usuario ya existe</h3>
    
    </>
  )
}
