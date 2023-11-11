'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import countries from '../../countries.json';
import Country from '@/components/country';

export default function CountryId() {
  const { id } = useParams() as any;
  const country = countries[id];
  return (
    <>
      <Country country={country} />
    </>
  );
}
