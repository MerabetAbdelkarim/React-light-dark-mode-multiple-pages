import { useState, useEffect } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';

const ThemeProvider = ({ children }) => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    const [theme, setTheme] = useState(storedTheme);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        document.body.classList.toggle('light-mode', theme === 'light');
    }, [theme]);

    return (
        <>
            <button className='toggleTheme' onClick={toggleTheme}>
                {theme === 'light' ? <BiSun /> : <BiMoon /> }
            </button>
            {children}
        </>
    );
};

export default ThemeProvider;
