import React, { useState } from "react";
import useDebounce from "./useDebounce";

export default function Hooks() {
  const [text, setText] = useState("");

  const debouncedValue = useDebounce(text);

  console.log(debouncedValue);

  return (
    <div>
      <p>HOOKS</p>
      <input onChange={(e) => setText(e.target.value)} />
    </div>
  );
}
