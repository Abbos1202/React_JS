import { useDebugValue, useState } from 'react';

export function useLocalStorage() {
    const [value, setValue] = useState("webbrain")
    // useDebugValue(value, (e) => e)
    // useDebugValue(getSlowValue(value))
    useDebugValue(value, (e) => getSlowValue(e))

    return [value, setValue]
}
const getSlowValue = (value) => {
    for (let i = 0; i < 2000000; i++) { }
    return value
}

export default useLocalStorage;