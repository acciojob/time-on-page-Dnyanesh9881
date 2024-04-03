
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [timer , setTimer]=useState(0);

  useEffect(()=>{
    let time=setInterval(()=>{
      setTimer(prev=>{
        return prev+1;
      });
    },1000)
    return ()=>clearInterval(time);
  },[]);
  
  return (
    <div>
      <p>You've been on this page for {timer} seconds.</p> 
    </div>
  )
}

export default App
