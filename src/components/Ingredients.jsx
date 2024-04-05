import React from 'react';

export default function Ingredients({ ingredients }) {
  const items = ingredients.map((item) => (
    <li className='list-disc ml-7 marker:text-dark-raspberry marker:text-xs pl-3 pb-1 leading-7'>
      <p>{item}</p>
    </li>
  ));

  return (
    <div className='pb-6 mb-6 border-b-[1px] border-light-grey'>
      <h2 className='--subtitle-style'>Ingredients</h2>
      <ul>{items}</ul>
    </div>
  );
}
