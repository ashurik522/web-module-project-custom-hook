import { useState } from 'react'

function useLocalStorage(key, intialValue) {
    const [storedValue, setStoredValue] = useState(()=>{
        if(localStorage.getItem(key)) {
            return (JSON.parse(localStorage.getItem(key)))
        }
        localStorage.setItem(key, JSON.stringify(intialValue))
        return intialValue;
    })  

    const setValue = (value) =>{
        localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value)
    }



    return [storedValue, setValue]
}

export default useLocalStorage;