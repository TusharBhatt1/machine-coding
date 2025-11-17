/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useDebounce from "./useDebounce";
import useThrottle from "./useThrottle";

export default function Hooks() {
  const [text, setText] = useState("");
    const debouncedValue = useDebounce(text);
    console.log(debouncedValue)
  //   console.log(debouncedValue);

//   const handleChange = (e) => {
//     setText(e.target.value);
//     console.log(e.target.value);
//   };

//   const debouncedFn = useDebounce(handleChange);

  const handleClick = () => console.log("clicked");
  const handleClickDebounce = useThrottle(handleClick);

  return (
    <div>
      <p>HOOKS</p>
      <input onChange={(e)=>setText(e.target.value)} value={text} placeholder="useDebounce" />
      <button onClick={handleClickDebounce}>Click me useThrottle</button>
    </div>
  );
}
