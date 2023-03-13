import { useEffect, useState } from "react";

export function useLocalStorage(key, initalValue) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initalValue;
  });

  //act as componentDidMount
  //everytime  [key, value] changes, it will rerun the effect
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
