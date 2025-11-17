export default function useDebounce(cb, delay = 1000) {
  let timer;

  const debouncedFn = function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => cb(...args), delay);
  };
  return debouncedFn;
}

// export default function useDebounce(value, delay = 300) {
//   const [debouncedValue, setDebouncedValued] = useState(value);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedValued(value);
//     }, delay);

//     return () => clearTimeout(timer);
//   }, [value, delay]);

//   return debouncedValue;
// }
