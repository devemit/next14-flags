'use client';
import { useState } from 'react';
import countries from '../countries.json';
import Image from 'next/image';
import Link from 'next/link';
import Input from './input';
import RegionFilter from './region-filter';
export default function CountriesList() {
  const [query, setQuery] = useState('');
  const [selectedCountry, setselectedCountry] = useState('');

  function onChangeQuery(event: any) {
    setQuery(event.target.value);
    setselectedCountry('');
  }
  function onChangeSelected(event: any) {
    setselectedCountry(event.target.value);
    setQuery('');
  }

  const filteredByRegion = selectedCountry
    ? countries.filter((country) => country.region === selectedCountry)
    : countries;

  const filteredItems =
    query === ''
      ? countries
      : countries.filter((country) => country.name.toLowerCase().includes(query.toLowerCase()));

  const combined = selectedCountry !== '' ? filteredByRegion : filteredItems;

  return (
    <>
      <div className='block md:flex md:items-center justify-between space-y-4'>
        <Input query={query} onChangeQuery={onChangeQuery} />
        <RegionFilter selectedCountry={selectedCountry} onChangeSelected={onChangeSelected} />
      </div>
      <br />
      <ul className='block md:grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {combined.map((country, index) => {
          return (
            <section key={index} className='max-w-md'>
              <Link href={`/${index}`}>
                <div className='my-4 '>
                  <div className='relative w-[100%] h-32'>
                    <Image src={country.flags.png} fill alt='flag' />
                  </div>
                  <div className='bg-slate-50 p-4 dark:bg-slate-900'>
                    <p className='font-bold text-lg text-slate-900 dark:text-slate-100'>
                      {country.name}
                    </p>
                    <p className='font-semibold text-md text-slate-900 dark:text-slate-100'>
                      Population: {country.population}
                    </p>
                    <p className='font-semibold text-md text-slate-900 dark:text-slate-100'>
                      Region: {country.region}
                    </p>
                    <p className='font-semibold text-md text-slate-900 dark:text-slate-100'>
                      Capital: {country.capital}
                    </p>
                  </div>
                </div>
              </Link>
            </section>
          );
        })}
      </ul>
    </>
  );
}
