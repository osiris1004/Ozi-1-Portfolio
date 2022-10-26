import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react'


export const Clock = () => {

 
const[myTime, setMyTime] = useState([])
  

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
      
     
      setMyTime([h,m,s,session])
  
    }
    setTimeout(showTime, 1000)

    
  },[myTime])

 
 
  

  return (
    <div className={`fontKey text-gray-400`}>
     <div className={` mb-4 animate-bounce text-center fontKeyHeadBoldLg`}>
      <div>T</div>
      <div>I</div>
      <div>M</div>
      <div>E</div>
     </div>
      <div className={`mb-4 animate-bounce text-gray-500`}> <FontAwesomeIcon icon={faAnglesDown} style={{height:30}} /></div>
      <div className={` mb-4 animate-bounce text-gray-500`}> <FontAwesomeIcon icon={faAnglesDown} style={{height:30}} /></div>
      
      <div className={` my-4  text-center`}>
      {myTime && (
       <div className={`fontKey text-green-500 flex flex-col gap-5`}>
         <div>{myTime[0]}</div>
        <div>{myTime[1]}</div>
        <div>{myTime[2]}</div>
        <div>{myTime[3]}</div>
       </div>
      )}
      </div>

      <div className={` my-4 animate-bounce`}> <FontAwesomeIcon icon={faAnglesDown} style={{height:30}} /></div>
      
    </div>
  )
}
