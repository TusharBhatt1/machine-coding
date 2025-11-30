import React, { useEffect, useState } from "react";


export default function DigitalClock() {
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");

  useEffect(() => {
    function setTime() {
      const date = new Date();

      setMinutes(date.getMinutes() < 9 ? "0"+date.getMinutes():date.getMinutes());
      setHours(date.getHours() < 9 ? "0"+date.getHours():date.getHours());
      setSeconds(date.getSeconds() < 9 ? "0"+date.getSeconds():date.getSeconds());
    }
    setTime();

    const timer = setInterval(() => setTime(), 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {hours + ":"}
      {minutes + ":"}
      {seconds}
    </div>
  );
}
