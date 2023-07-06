import { useEffect, useState } from "react";

export const useDebounce = (value, duration) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value)
        }, duration)
        return () => clearTimeout(timeout)
    }, [value, duration])
return debounceValue
}
