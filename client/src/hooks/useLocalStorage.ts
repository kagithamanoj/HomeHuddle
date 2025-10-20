import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const stored = localStorage.getItem(key);
  const [value, setValue] = useState<T>(stored ? JSON.parse(stored) : initialValue);

  const updateValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
}
