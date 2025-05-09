'use client'

import { useEffect, useState } from "react"


const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if(stored) {
            setTheme(stored);
            document.documentElement.classList.toggle('dark', stored === 'dark');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    },[]);

    const handleToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

  return (
    <button onClick={handleToggle} className="p-2 rounded bg-gray-300 dark:bg-gray-700">
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}

export default ThemeToggle