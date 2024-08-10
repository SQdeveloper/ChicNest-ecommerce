import { useState } from "react";
import { ProductCart } from "../types/product";

const useLocalStorage = (key: string, initialValue: ProductCart[]) => {
    const [storedValue, setStoredValue] = useState(()=>{
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch {
            return initialValue;
        }
    });

    const setValue = (value: ProductCart[])=>{
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        }
        catch(err) {
            console.log(err);
        }
    }

    return [storedValue, setValue];
};

export default useLocalStorage;