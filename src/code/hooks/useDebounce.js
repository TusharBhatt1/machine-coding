import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValued] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValued(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
