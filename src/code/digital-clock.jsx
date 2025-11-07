import { useEffect, useState } from "react";

function DigitalClock() {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(()=>{

    function setTime(){
    const date = new Date()
    setHours(date.getHours())
    setMinutes(date.getMinutes())
    setSeconds(date.getSeconds())
    }

    setTime()

   const interval= setInterval(() => {
        setTime()
    }, 1000);

    return ()=> clearInterval(interval)

  },[])

  return (
    <p>
      {hours + ":"}{minutes+":"} 
      {seconds}
    </p>
  );
}

export default DigitalClock;
