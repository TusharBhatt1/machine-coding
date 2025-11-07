import React, { useMemo } from "react";

export default function Debouncethrottle() {

  const debounce = function (cb, delay = 1000) {
    let timer;

    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => cb(...args), delay);
    };
  };

  const handleChange = (e) => console.log("fetching for: ", e.target.value);
  const handleDebounceChange = useMemo(() => debounce(handleChange), []);

  ////throttle
  const handleClick = () => console.log("clicked...");

  const throttle = function (cb, delay = 2000) {
    let now = 0;
    return function (...args) {
      const lastTrigger = Date.now();
      if (lastTrigger - now > delay) {
        cb(...args);
        now = lastTrigger;
      }
    };
  };

  const handleThrottleClick = useMemo(()=>throttle(handleClick),[])

  return (
    <div>
      <p>Debounce</p>
      <input className="border p-1" onChange={handleDebounceChange} />

      <p>Throttle</p>
      <button onClick={handleThrottleClick} className="border p-1">
        Click me
      </button>
    </div>
  );
}
