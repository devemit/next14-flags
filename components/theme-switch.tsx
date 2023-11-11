'use client';
import { useTheme } from '@/hooks/useTheme';
import { HiMoon } from 'react-icons/hi';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? (
        <div className='flex items-center gap-2'>
          <HiMoon size={20} className='text-black' />
          <span className='text-sm text-slate-900'>Dark Mode</span>
        </div>
      ) : (
        <div className='flex items-center gap-2'>
          <HiMoon size={20} className='text-white' />
          <span className='text-sm dark:text-slate-100'>Light Mode</span>
        </div>
      )}
    </button>
  );
}
