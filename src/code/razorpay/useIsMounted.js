// create a custom hook that returns true if a component is mounted and false otherwise.

import { useEffect, useState } from "react";

export default function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return isMounted;
}
