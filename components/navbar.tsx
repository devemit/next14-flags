import ThemeSwitch from './theme-switch';

export default function Navbar() {
  return (
    <nav className='flex bg-slate-100 dark:bg-slate-900 justify-between items-center shadow-md p-6'>
      <div className='text-base dark:text-slate-100 font-semibold'>Where in the World?</div>
      <ThemeSwitch />
    </nav>
  );
}
