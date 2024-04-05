import React from 'react';

export default function PreparationTime({ prepareTime }) {
  const listItems = prepareTime.map((time) => {
    const parts = time.split(':');
    return (
      <li className='list-disc ml-7 marker:text-dark-raspberry marker:text-xs pl-3 leading-7'>
        <p>
          <strong>{parts[0]}:</strong> {parts[1]}
        </p>
      </li>
    );
  });

  return (
    <div className='p-6 bg-rose-white rounded-lg mb-8'>
      <h2 className='text-xl font-semibold text-dark-raspberry mb-3'>
        Preparation time
      </h2>
      <ul>{listItems}</ul>
    </div>
  );
}
