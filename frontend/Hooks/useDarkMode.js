import { useState } from 'react'
import useLocalStorage from './useLocalStorage';

function useDarkMode(intialValue) {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", intialValue);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };

    return [darkMode, setDarkMode, toggleMode]
}

export default useDarkMode;
