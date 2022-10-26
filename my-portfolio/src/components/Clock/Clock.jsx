import React, { useEffect, useState } from 'react'

export const Clock = () => {

 
const[myTime, setMyTime] = useState()
  

  useEffect(()=>{
    
    const  showTime = () =>{
      var date = new Date();
      var h = date.getHours(); // 0 - 23
      var m = date.getMinutes(); // 0 - 59
      var s = date.getSeconds(); // 0 - 59
      var session = "AM";
      
      if(h === 0){
          h = 12;
      }
      
      if(h > 12){
          h = h - 12;
          session = "PM";
      }
      
      h = (h < 10) ? "0" + h : h;
      m = (m < 10) ? "0" + m : m;
      s = (s < 10) ? "0" + s : s;
      
      let time = h + ":" + m + ":" + s + " " + session;
      setMyTime(time)
  
    }
    setTimeout(showTime, 1000)

    
  },[myTime])
  

  return (
    <div>{myTime}</div>
  )
}
