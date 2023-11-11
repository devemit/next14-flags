import Link from 'next/link';

export default function Button({ title, href }: any) {
  return (
    <button
      type='button'
      className='text-slate-900 bg-slate-200 shadow-lg  focus:outline-none font-medium rounded-sm text-sm px-6 py-1 mr-2 mb-2'
    >
      <Link href={href}>{title}</Link>
    </button>
  );
}
