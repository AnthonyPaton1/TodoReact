import { useState, useEffect } from "react";

function UseLocalStorageState(key, defaultVal) {
  const [state, setState] = useState(() => {
    let val;
    try {
      const storedValue = window.localStorage.getItem(key);
      val = storedValue ? JSON.parse(storedValue) : defaultVal;
    } catch (error) {
      console.error("Error reading localStorage:", error);
      val = defaultVal;
    }
    return val;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [key, state]);

  return [state, setState];
}

export default UseLocalStorageState;
