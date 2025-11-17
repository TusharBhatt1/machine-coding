export default function useThrottle(event, delay = 1000) {
  let lastCall = 0;

  const throttledFn = function (...args) {
    const now = Date.now();
    if (now - lastCall > delay) {
      event(...args);
      lastCall = now;
    }
  };

  return throttledFn;
}
