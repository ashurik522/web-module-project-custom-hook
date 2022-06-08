import { useState } from 'react'

function useDarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };

    return [darkMode, setDarkMode, toggleMode]
}

export default useDarkMode;
