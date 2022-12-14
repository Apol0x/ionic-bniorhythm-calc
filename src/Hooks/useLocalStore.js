import { useState } from "react";

export const useLocalStore = (key, defaultValue) => {
    const getInitalValue = () => localStorage.getItem(key) ?? defaultValue;
    const [value, setValue] = useState(getInitalValue);
    const setAndStoreValue = (newValue) => {
        setValue(newValue)
        localStorage.setItem(key, newValue)
    }
    return [value, setAndStoreValue];
}