import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function spinner(){
  return (
    <div style={{"width":"100%","height":"100vh","position":"fixed","display":"flex","align-item":"center","justify-content":"center","top":"0px"}}>
      <DotLottieReact
      src="https://lottie.host/8f0dfc9f-1d55-4740-ad62-2218dd067029/kZ3MUnZvbn.lottie"
      style={{"width": "130px","height": "130px","margin":"auto"}}
      loop
      autoplay
       speed="2" 
    />
    </div>
    
  );
};
