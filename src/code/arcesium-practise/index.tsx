// useDebounce and useThrottle
import React, { useCallback, useEffect, useRef, useState } from "react";

export async function fetchWithRetries2(fetchCall, retries = 3) {
  try {
    const data = await fetchCall();
    return data;
  } catch (error) {
    await new Promise((res) => setTimeout(() => res(""), 3000));
    if (retries > 0) return fetchWithRetries2(fetchCall, retries - 1);
    else throw "FAILED AFTER 3 RETRIES";
  }
}

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    const currentValue = storedValue ? JSON.parse(storedValue) : initialValue;
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return {
    value,
    setValue,
  };
};
export default function ArcesiumPractise() {
  const useDebounce = (cb, delay = 300) => {
    const timerRef = useRef(null);

    return useCallback(
      (...args) => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => cb(...args), delay);
      },
      [cb, delay]
    );
  };

  const useThrottle = (cb, delay = 1000) => {
    const lastCall = useRef(0);
    return useCallback(
      (...args) => {
        const now = Date.now();
        if (now - lastCall.current > delay) {
          cb(...args);
          lastCall.current = now;
        }
      },
      [cb, delay]
    );
  };

  const handleChange = (e) => console.log(e.target.value);
  const handleDebouncedChange = useDebounce(handleChange);

  const handleClickMe = () => console.log("clicked...");
  const handleThrottleClickMe = useThrottle(handleClickMe);

  return (
    <>
      <input onChange={handleDebouncedChange} />
      <button onClick={handleThrottleClickMe}>Click me</button>
    </>
  );
}
