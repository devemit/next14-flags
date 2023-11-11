import { ChangeEvent } from 'react';
import { VscSearch } from 'react-icons/vsc';

interface InputProps {
  onChangeQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  query: string;
}

export default function Input({ query, onChangeQuery }: InputProps) {
  return (
    <div className='relative'>
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
        <VscSearch className='text-slate-300' />
      </div>
      <input
        value={query}
        onChange={onChangeQuery}
        type='text'
        placeholder='Search for a country...'
        id='default-input'
        className='bg-gray-50 border px-10 border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full max-w-md p-2.5'
      />
    </div>
  );
}
