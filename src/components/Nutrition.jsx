import React from 'react';

export default function Nutrition({ nutrition, nutritionInfo }) {
  const listItems = nutritionInfo.map((info) => {
    const parts = info.split(':');
    return (
      <div className='p-3 pl-5 border-b-[1px] border-light-grey grid grid-cols-2'>
        <p>{parts[0]}</p>
        <p className='text-dark-raspberry font-bold'>{parts[1]}</p>
      </div>
    );
  });

  return (
    <div>
      <h2 className='--subtitle-style'>Nutrition</h2>
      <p className='mb-5'>{nutrition}</p>
      {listItems}
    </div>
  );
}
