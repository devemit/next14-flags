interface RegionFilterProps {
  selectedCountry: string;
  onChangeSelected: (e: any) => void;
}

export default function RegionFilter({ selectedCountry, onChangeSelected }: RegionFilterProps) {
  return (
    <>
      <select
        value={selectedCountry}
        onChange={onChangeSelected}
        id='countries'
        className='bg-gray-50 border w-1/2 max-w-md border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
      >
        <option value='Africa'>Africa</option>
        <option value='Americas'>America</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </select>
    </>
  );
}
