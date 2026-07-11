import React from 'react';

export default function alert({
    ...props
}){

    // const capitalize=word=>{
    //   const targetIndex=word.split('.').slice(0, 2).join('.') + '.';
    //   return targetIndex 
    // }
    //  const capitalizesnd=word=>{
    //   const targetIndexe=word.split('.')[2].trim() + ".";
    //   return targetIndexe 
    // }
    return(
        <>
        {props.alert && <div className={`alert ${props.type}`} role="alert" style={{"width":"100%","position":"absolute"}}>
  <h4 className="alert-heading">{props.heading}</h4>
<p>{props.message}</p>
  {/* <hr/> */}
</div>}
        
        </>
    )
}