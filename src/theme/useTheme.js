import { useDispatch, useSelector } from 'react-redux';
import { toggelTheme } from '../features/theme/themeSlice';
import { useEffect } from 'react';

function useTheme() {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        dispatch(toggelTheme(newTheme))
    };

    useEffect(() => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
    }, [theme]);

    return ( [theme , toggleTheme] );
}

export default useTheme