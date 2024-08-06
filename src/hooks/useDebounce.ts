import { useEffect, useState } from "react"

const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState<string>(value);

    useEffect(()=>{
        const stm  = setTimeout(()=>{
            setDebouncedValue(value)            
        }, delay)

        return ()=>{ clearTimeout(stm) }
    },[value, delay])
    
    return debouncedValue;
}

export default useDebounce;