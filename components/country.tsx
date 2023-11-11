import Image from 'next/image';
import Button from './button';
export default function Country({ country }: { country: any }) {
  return (
    <div className='my-4 p-10'>
      <Button title='Back' href={'/'} />
      <br />
      <br />
      <section className='md:flex justify-around'>
        <div className='relative w-[100%] h-32 md:h-52 md:w-[40%]'>
          <Image src={country.flags.png} fill alt='flag' />
        </div>
        <div className='py-4 bg-slate-50 dark:bg-slate-900 dark:text-slate-100  px-2'>
          <p className='font-bold text-lg'>{country.name}</p>
          <p className='font-semibold text-sm'>
            Native Name:{' '}
            <span className='text-slate-600 dark:text-slate-200'> {country.nativeName}</span>
          </p>
          <p className='font-semibold text-sm'>
            Population:{' '}
            <span className='text-slate-600 dark:text-slate-200'> {country.population}</span>
          </p>
          <p className='font-semibold text-sm'>
            Region: <span className='text-slate-600 dark:text-slate-200'> {country.region}</span>
          </p>
          <p className='font-semibold text-sm'>
            Sub Region:{' '}
            <span className='text-slate-600 dark:text-slate-200'> {country.subregion}</span>
          </p>
          <p className='font-semibold text-sm'>
            Capital: <span className='text-slate-600 dark:text-slate-200'> {country.capital}</span>
          </p>
        </div>
        <div className='py-4 bg-slate-50 dark:bg-slate-900 dark:text-slate-100 px-2'>
          <p className='font-semibold text-sm'>
            Top Level Domain:{' '}
            <span className='text-slate-600 dark:text-slate-200'> {country.topLevelDomain}</span>
          </p>
          <p className='font-semibold text-sm'>
            Languages:
            {country.languages.map((ele: any) => (
              <span className='text-slate-600 dark:text-slate-200'>{ele.name}</span>
            ))}
          </p>
          <p className='font-semibold text-sm'>
            Currencies:
            {country.currencies.map((ele: any) => (
              <span>{ele.name}</span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
}
