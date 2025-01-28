import { useEffect, useReducer } from "react";

function useLocalStorageReducer(key, defaultVal, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultVal;
    } catch (error) {
      console.error("Error reading localStorage for key:", key, error);
      return defaultVal;
    }
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        window.localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.error("Error writing to localStorage for key:", key, error);
      }
    }, 300); // Debounced for performance
    return () => clearTimeout(timeoutId);
  }, [state, key]);

  return [state, dispatch];
}

export { useLocalStorageReducer };
